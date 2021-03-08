import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  Ticket: any =[];
  constructor(public restApi: RestApiService,private router: Router) { }

  ngOnInit(): void {
    this.loadTicket();
  }
 /* loadTicket() {
    return this.restApi.createTk().subscribe((data: {}) => {this.Ticket = data;})
  }*/

  loadTicket() {
    this.restApi.createTk().subscribe((data: {}) => {
      this.router.navigate(['/app-ticket'])
    })
  }

}
