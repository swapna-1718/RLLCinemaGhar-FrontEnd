import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { MovieService } from './movie.service';
import { TheaterService } from './theater.service';
import { SeatService } from './seat.service';
import { TicketService } from './ticket.service';
import { TicketdetailsService } from './ticketdetails.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8081/RLLCinemaGhar1';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch user list
  getUsers(): Observable<UserService> {
    return this.http.get<UserService>(this.apiURL + '/admin/getAllUser')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  

 /* getMovies(): Observable<UserService> {
    return this.http.get<UserService>(this.apiURL + '/allmovies')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }*/


  // HttpClient API get() method => Fetch users
  getUser(id: string): Observable<UserService> {
    return this.http.get<UserService>(this.apiURL + '/getById/' + id ,this.httpOptions )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  createUser(user: any): Observable<UserService> {
    return this.http.post<UserService>(this.apiURL + '/createUser', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  updateUser( user :UserService): Observable<UserService> {
    return this.http.put<UserService>(this.apiURL + '/update/' ,JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete user
  deleteUser(id: string){
    return this.http.delete<UserService>(this.apiURL + '/delete/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getByEmail(email:String): Observable<UserService> {
    return this.http.get<UserService>(this.apiURL + '/getUser/'+email+'/',this.httpOptions);
  }

 /* getCustomer(emailId:String): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.springRestUrl + '/getCustomer/'+emailId+'/',this.httpOptions);
  }*/


  createMovies(movies: any): Observable<MovieService> {
    return this.http.post<MovieService>(this.apiURL + '/booking/createMovies', JSON.stringify(movies), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  getMovies(): Observable<MovieService> {
    return this.http.get<MovieService>(this.apiURL + '/booking/getMovies')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getTicket(): Observable<TicketService> {
    return this.http.get<TicketService>(this.apiURL + '/booking/getTicket')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  

  createTicket(): Observable<TicketdetailsService> {
    return this.http.get<TicketdetailsService>(this.apiURL + '/booking/getLastInsertedTicket')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createTk(): Observable<TicketdetailsService> {
    return this.http.get<TicketdetailsService>(this.apiURL + '/booking/createTicket')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  login(email:string):Observable<UserService>
  {
    return this.http.get<UserService>(this.apiURL+'/login/validate/'+email+'/',this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  adminLogin(email:string):Observable<UserService>
  {
    return this.http.get<UserService>(this.apiURL+'/login/admin/'+email+'/',this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  addTheater(theater: any): Observable<TheaterService> {
    return this.http.post<TheaterService>(this.apiURL + '/booking/createTheaters', JSON.stringify(theater), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  addSeats(theater: any): Observable<SeatService> {
    return this.http.post<SeatService>(this.apiURL + '/booking/createSeats', JSON.stringify(theater), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}


