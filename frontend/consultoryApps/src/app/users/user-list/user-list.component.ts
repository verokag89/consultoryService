import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../types/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public p:number;
  constructor(public userService: UserService,private toasterService: ToastrService, private routes: Router) { 

    this.userService.getUsers();
  }

  ngOnInit() {
    this.userService.getUsers();

  }
  
  showForEdit( user?: User){
    this.userService.selectedUser = Object.assign({}, user);
  }

  onDelete(user: User){

    this.userService.deleteUser(user).then(
      data=>{
 
        this.userService.getUsers();
        this.toasterService.success("El usuario ha sido eliminado", "Registro Usuario");
      }
    ).catch(error=>{
      this.toasterService.error("Error: El usuario no pudo ser eliminado", "Registro Usuario");

    }
    );
  }

  public onEdit(element: any): void {
    this.routes.navigate(['usuarios', element.IdUser]);
  }

}
