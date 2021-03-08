import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Input()  //userLogin = { email: '',pwd: ''}
email:any
pwd:any
  
   public stringCheck: any;
  
  
  constructor(private router: Router,public restApi: RestApiService
    ) { }

  ngOnInit(): void { }

  login()
  {
    
    this.restApi.login(this.email).subscribe((data) => {
      this.stringCheck = data;
     if(this.stringCheck)
     {

     
      if(this.stringCheck.email==this.email &&this.stringCheck.pwd==this.pwd)
      {
        this.router.navigate(['/app-user-dashboard',this.stringCheck.email]);
      }
      else{
        alert('Email or Password is Incorrect')
      }
    }
    else
    {
      alert('Please Enter Email and PassWord!!')
    }
      });
  }
    
   
  
  }
 
  
  


