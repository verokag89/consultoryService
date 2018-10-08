import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../types/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();

  }
  
  showForEdit( user?: User){
    this.userService.selectedUser = Object.assign({}, user);
  }

}
