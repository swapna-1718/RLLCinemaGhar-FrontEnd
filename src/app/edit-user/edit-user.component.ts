import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];

  UserData: any = {};

  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

    ngOnInit() { 
      this.restApi.getUser(this.id).subscribe((data: {}) => { this.UserData = data;
      })
    }

    editUser() {
      if(window.confirm('Are you sure, you want to update?')){
        this.restApi.updateUser( this.UserData[0]).subscribe(data => {
          this.router.navigate(['/app-admin-dashboard'])
        })
      }
    }
}
