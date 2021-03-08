import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @Input() Movie1Details = {
    title:'KGF-2',
    date:'04/03/2021',
    status:'ACTIVE'
  }

  @Input() Movie2Details = {
    title:'RADHE',
    date:'10/03/2021',
    status:'ACTIVE'
  }
  @Input() Movie3Details = {
    title:'SOORYAVANSHI',
    date:'12/03/2021',
    status:'ACTIVE'
  }

  


  constructor(public restApi: RestApiService, 
    public router: Router) { }

  ngOnInit(): void {
    
  }
 /* btnClick()  {  
    this.router.navigateByUrl('/app-choose-theater');
};*/

addMovie1() {
  this.restApi.createMovies(this.Movie1Details).subscribe((data: {}) => {
    this.router.navigate(['/app-choose-theater'])
  })
}
addMovie2() {
  this.restApi.createMovies(this.Movie2Details).subscribe((data: {}) => {
    this.router.navigate(['/app-choose-theater'])
  })
}

addMovie3() {
  this.restApi.createMovies(this.Movie3Details).subscribe((data: {}) => {
    this.router.navigate(['/app-choose-theater'])
  })
}

}

