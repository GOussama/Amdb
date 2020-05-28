export class Movie {
    id: number;
    original_title: string;
    title: string;
    overview: string;
    genres: Genre[];
    original_language: string;
    poster_path: string;
    release_date: Date;
    vote_average: number;

    constructor(_original_title: string, _title :string, _overview: string, _genres: Genre[], 
        _original_language: string, _poster_path: string, _release_date: Date, _vote_average: number){
      this.original_title = _original_title;
      this.title = _title;
      this.overview = _overview;
      this.genres = _genres;
      this.original_language = _original_language;
      this.poster_path = _poster_path;
      this.release_date = _release_date;
      this.vote_average = _vote_average;      
    }
}

export class Genre {
    id: number;
    name: string;
}
