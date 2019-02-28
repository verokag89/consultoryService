import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../types/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PositionUser } from '../types/positionuser.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UserService]
})
export class UsersComponent implements OnInit {

  public p:number;
  positions: PositionUser[];
  PositionList: PositionUser[];
  selectedPosition: PositionUser;
  PositionRol : string;
  UserId : number; 
  titlePage : string;
  constructor(public userService: UserService,private toasterService: ToastrService, private routes: Router) { 

    this.resetForm();
    this.userService.getUsers();
    this.titlePage= "Nuevo Usuario";
    /*
    this.aRoute.params.subscribe(params => {
      this.UserId = parseInt(params.id);
      if (this.UserId) {

        this.userService.getUserById(this.UserId).then(data => {
          
        });
      }
    });*/
  }

  ngOnInit() {
    this.userService.getUsers();
    this.resetForm();
    //this.getPositions();
    this.userService.getPostions();
  

    if (this.UserId) {
      this.userService.getUserById(this.UserId).then(data => {
      });
    }
  }
  resetForm(form?: NgForm) {

    if (form != null)
      form.reset();

    this.userService.selectedUser = {
      IdUser: null,
      LastName: '',
      FirstName: '',
      IdPosition: null,
      Position: ''
    }
  }

  onSubmit(form: NgForm) {

    if(form.value.IdUser== null){

      this.userService.postUser(form.value).subscribe(data => {
        this.resetForm(form);
        this.toasterService.success("El usuario ha sido agregado", "Registro Usuario");
        this.userService.getUsers();
        //this.router.navigateByUrl('/usuarios');
        //this.router.navigate(['usuarios']);
      })
  
    }else{

      this.userService.putUser(form.value).subscribe(data => {
        this.resetForm(form);
        this.toasterService.success("El usuario ha sido editado", "Registro Usuario");
        this.userService.getUsers();
       // this.router.navigateByUrl('/usuarios');
      //  this.router.navigate(['usuarios']);
      })
  
    }
  
  }

  getPositions(): void {
    this.userService.getPostions().then((res: any) => {
      this.PositionList = res;
    }).catch(err => {

    });

  }

  
  onOptionsSelected(event){
    console.log("++"+ event);
  }

  showForEdit( user?: User){
    this.userService.selectedUser = Object.assign({}, user);
    this.titlePage =  "Editar Consultorio";
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
