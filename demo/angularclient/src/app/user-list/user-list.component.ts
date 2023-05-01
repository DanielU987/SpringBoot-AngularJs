import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private UserServiceService: UserServiceService) {
  }

  ngOnInit() {
    this.UserServiceService.findAll().subscribe(data => {
      this.users = data;
      console.log(data)
    });
  }
}
