import { TestBed } from '@angular/core/testing';

import { TicketdetailsService } from './ticketdetails.service';

describe('TicketdetailsService', () => {
  let service: TicketdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
