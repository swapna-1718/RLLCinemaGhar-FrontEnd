import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  
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
        alert('Email or Password is Incorrect')
      }
    }
    else
    {
      alert('Please Enter Correct Email And Password ')
    }
      });
  }

}

