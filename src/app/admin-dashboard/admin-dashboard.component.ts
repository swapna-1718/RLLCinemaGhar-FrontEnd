import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  Users: {};

  constructor(private router: Router,
    public actRoute: ActivatedRoute,
    public restApi: RestApiService,
   
    ) { }

  ngOnInit(): any{
   
  }

  btnClick()  {  
    this.router.navigateByUrl('/app-edit-admin');
};



}
