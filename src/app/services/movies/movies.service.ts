import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    })
  };

  getMovies(): Observable<any>{
    return this.http.get("http://localhost:3000/movies");
  }

  getMovieByName(name): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=1&include_adult=false&query=${name}`);
  }

  getGenres(): Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US");
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>("http://localhost:3000/movies", movie, this.httpOptions).pipe(catchError(error => of(null)));
  }

  deleteMovie(id : number): Observable<any>{
    return this.http.delete(`http://localhost:3000/movies/${id}`,this.httpOptions).pipe(catchError(error => of(null)))
  }

}
