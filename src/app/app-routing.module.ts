import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ChooseTheaterComponent } from './choose-theater/choose-theater.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { TicketComponent } from './ticket/ticket.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ViewByIdComponent } from './view-by-id/view-by-id.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcomepage', pathMatch: 'full' },
  {path : 'welcomepage' , component :WelcomepageComponent},
  {path : 'app-homepage' , component :HomepageComponent},
  {path : 'app-aboutus' , component :AboutusComponent},
  {path : 'app-admin-signup' , component :AdminSignupComponent},
  {path : 'app-user-signup' , component :UserSignupComponent},
  {path : 'app-contactus' , component :ContactusComponent},
  {path : 'app-selectseat' , component :SelectseatComponent},
  {path : 'app-admin-login' , component :AdminLoginComponent},
  {path : 'app-user-login' , component :UserLoginComponent},
  {path : 'app-choose-theater' , component :ChooseTheaterComponent},
  {path : 'app-edit-admin' , component :EditAdminComponent},
  {path : 'app-edit-user/:id' , component :EditUserComponent},
  {path : 'app-payment' , component :PaymentComponent},
  {path : 'app-selectseat' , component :SelectseatComponent},
  {path : 'app-user-dashboard/:email' , component :UserDashboardComponent},
  {path : 'app-admin-dashboard/:email' , component :AdminDashboardComponent},
  {path : 'app-viewuser' , component :ViewuserComponent},
  {path : 'app-booking-history' , component :BookingHistoryComponent},
  {path : 'app-show-movies' , component :ShowMoviesComponent},
  {path : 'app-view-by-id/:email' , component :ViewByIdComponent},
  {path : 'app-ticket' , component :TicketComponent },
  {path : 'app-create-ticket' , component :CreateTicketComponent }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
