import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators
} from '@angular/forms';
import { MoviesService } from '../../services/movies/movies.service';
import { Genre, Movie } from '../../services/movies/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  addMovieForm;
  allGenres : Genre[];
  genry:string;

  title: string;
  original_language: string;
  genres : Genre[];
  overview: string;
  original_title: string;
  poster_path: string;
  release_date: Date;
  vote_average: number;
  newMovie: Movie;
  movie: Movie;



  constructor(private formBuilder: FormBuilder, private moviesService : MoviesService, private router: Router) { 
    this.moviesService.getGenres().subscribe(data => {
      this.allGenres = data.genres;
      console.log("all genres :", this.allGenres);
    })
  }

  ngOnInit(): void {
    this.addMovieForm = this.formBuilder.group({
      'original_title':  new FormControl('',  [Validators.required]),
      'title': new FormControl('',  [Validators.required]),
      'overview': new FormControl('',  [Validators.required]), 
      'original_language': new FormControl('',  [Validators.required]),  
      'poster_path':  new FormControl('',  [Validators.required]),
      'release_date':  new FormControl('',  [Validators.required]),
      'vote_average':  new FormControl('',  [Validators.required]),
    });
  }

  getMovieInfo(value){
    let movieName = value.replace(/\b\w/g, l => l.toUpperCase());
    console.log("movieName", movieName);
    this.moviesService.getMovieByName(value).subscribe(data => {
      this.movie = data.results.filter(a => a.original_title === movieName && a.poster_path);
      // console.log("movie :", this.movie);
      this.genry = "Action";
      // this.genres = this.allGenres.filter( a => a.id === this.movie[0].genre_ids[0]);    
      this.title = this.movie[0].title;
      this.overview = this.movie[0].overview;
      this.original_title = this.movie[0].original_title;
      this.original_language = this.movie[0].original_language;
      this.poster_path = this.movie[0].poster_path;
      this.release_date = this.movie[0].release_date;
      this.vote_average = this.movie[0].vote_average;
    })
  }
  onSubmit() {
    this.newMovie = new Movie( 
      this.addMovieForm.value.original_title, 
      this.addMovieForm.value.title,
      this.addMovieForm.value.overview,this.genres, this.original_language, this.addMovieForm.value.poster_path,
      this.addMovieForm.value.release_date, this.addMovieForm.value.vote_average);
      this.moviesService.addMovie(this.newMovie).subscribe(data => {
         this.router.navigate(['/movies']);
      })
  };

}
