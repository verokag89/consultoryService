import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../types/user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UserService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
  }

 
}
