import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  @Input() UserDetails = { email: '',pwd: '',   name:'',dob:'' ,gender:'female',date:'' }
  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addUser() {
    this.restApi.createUser(this.UserDetails).subscribe((data: {}) => {
      this.router.navigate(['/app-user-login'])
    })
  }


  btnClick()  { 
    this.router.navigateByUrl('/app-user-login');
};

}
