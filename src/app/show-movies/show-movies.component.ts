import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {
  Movies: any = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadMovies();
  }
  loadMovies() {
    return this.restApi.getMovies().subscribe((data: {}) => {this.Movies = data;})
  }

}
