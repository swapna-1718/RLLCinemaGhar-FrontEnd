import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  BookingDetails : any = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadTicket();
  }
  loadTicket() {
    return this.restApi.getTicket().subscribe((data: {}) => {this.BookingDetails = data;})
  }
 
 

}
