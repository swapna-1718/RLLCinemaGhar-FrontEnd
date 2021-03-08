import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  email = this.actRoute.snapshot.params['email'];
 
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
  }



 /* editUser() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateUser( this.UsersData[0]).subscribe(data => {
        this.router.navigate(['/app-user-dashboard'])
      })
    }
  
};*/

btnClick()  {  
  {
  this.router.navigate(['/app-view-by-id',this.email])
  }
};

}
