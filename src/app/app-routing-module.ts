import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component'
import { AddMovieComponent } from './components/add-movie/add-movie.component'


const routes: Routes = [
    {
        path: '',
        component: MoviesComponent,
    },
    {
        path: 'movies/create',
        component: AddMovieComponent,
    },
    {
      path: 'movies',
      component: MoviesComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }