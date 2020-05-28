import { Component, OnInit , AfterViewInit} from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service'
import { Movie } from '../../services/movies/movie'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit {

  movies : Movie[];
  id:number
  faPlus = faPlus;

  constructor(private moviesService : MoviesService, private router : Router) {}

  ngOnInit(): void {
      this.fetchMovies();
  }

  fetchMovies(){
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data;
    })
  }

  ngAfterViewInit() : void {}

  deleteMovie(id){
    this.moviesService.deleteMovie(id).subscribe(() => {});
    this.router.navigate(['/movies']);
    this.fetchMovies();
  }

}
