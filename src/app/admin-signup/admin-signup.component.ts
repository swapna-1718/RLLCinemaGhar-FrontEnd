import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  @Input()  
  email:any
  pwd:any
    
     public stringCheck: any;

  constructor(private router: Router,public restApi: RestApiService) { }

  ngOnInit(): void {
  }
  login()
  {
    
    this.restApi.adminLogin(this.email).subscribe((data:any) => {
      this.stringCheck = data;
     if(this.stringCheck)
     {

     
      if(this.stringCheck.email==this.email &&this.stringCheck.pwd==this.pwd)
      {
        this.router.navigate(['/app-admin-dashboard',this.stringCheck.email]);
      }
      else{
        alert('user not found')
      }
    }
    else
    {
      alert('user not found')
    }
      });
  }

}
