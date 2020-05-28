import { Component, OnInit, Input, Output ,AfterViewInit } from '@angular/core';
import { Movie } from '../../services/movies/movie';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from '../../services/movies/movies.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit , AfterViewInit {

  @Input() movie : Movie;
  @Output() deleteEvent = new EventEmitter<number>();
  
  faTrash = faTrash; 

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {}

  getGenres(movie){
    return movie.genres.map(a => " " + a.name)
  }

  ngAfterViewInit() {
    
  }

  deleteMovie(data:number) {
    this.deleteEvent.emit(data);
  }

  

    
}
