import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
Ticket: any =[];
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadTicket();
  }
  loadTicket() {
    return this.restApi.createTicket().subscribe((data: {}) => {this.Ticket = data;})
  }

}
