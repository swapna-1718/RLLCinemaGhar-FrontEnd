import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewByIdComponent implements OnInit {
  email = this.actRoute.snapshot.params['email'];
  Users: any = {};
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {

    this.restApi.getByEmail(this.email).subscribe((data: {}) => {this.Users = data;})
  }

  editUser() {
      if(window.confirm('Are you sure, you want to update?')){
        this.restApi.updateUser( this.Users[0]).subscribe(data => {
          this.router.navigate(['/app-view-by-id'])
        })
      }
    }
  

}
