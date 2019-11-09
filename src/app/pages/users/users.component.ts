import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: any = [];

  constructor(private userListService: UserListService) { }


  ngOnInit() {
      this.fetchAllUsers();
  }


  fetchAllUsers() {
        this.userListService.fetchAllUsers().subscribe( resp => {
              this.users = resp;
        });
  }
}
