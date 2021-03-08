import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-selectseat',
  templateUrl: './selectseat.component.html',
  styleUrls: ['./selectseat.component.css']
})
export class SelectseatComponent implements OnInit {
value: any;
  @Input() Seats = 
    {
      seatNumber:'',
      time:'',
      status:'BOOKED'
    }
  

  constructor(private router: Router,public restApi: RestApiService, ) { }
myForm:any;
  ngOnInit(): void {
  }
  addSeats() {
    this.restApi.addSeats(this.Seats).subscribe((data: {}) => {
      this.router.navigate(['/app-payment'])
    })
  }

  
 /* btn1Click()  {
    this.router.navigateByUrl('/app-payment');
};*/
}
