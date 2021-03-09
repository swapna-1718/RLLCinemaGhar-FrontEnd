import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-choose-theater',
  templateUrl: './choose-theater.component.html',
  styleUrls: ['./choose-theater.component.css']
})
export class ChooseTheaterComponent implements OnInit {

  @Input() Theater= {
    name:'NAVARANG',
	t1:'2.30PM',

	date:''
  }
  public model:any;

  constructor(private router: Router,public restApi: RestApiService,) { }

  ngOnInit(): void { 
  }

  btn1Click()  {  
    this.router.navigateByUrl('/app-choose-theater');
};

btnClick()  {  
  this.router.navigateByUrl('/app-choose-theater');
};

  chooseTheater() {
    this.restApi.addTheater(this.Theater).subscribe((data: {}) => {
      this.router.navigate(['/app-selectseat'])
    })
  }
  
}
