import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  Users: any = [];
  constructor( public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    return this.restApi.getUsers().subscribe((data: {}) => {this.Users = data;})
  }

  
  
  deleteUser(id: string) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteUser(id).subscribe(data => {this.loadUsers()
      })
    }
  } 

}
