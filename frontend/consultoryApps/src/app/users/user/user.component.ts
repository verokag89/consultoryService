import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';
import { ToastrService } from 'ngx-toastr';
import { PositionUser } from '../../types/positionuser.model';
import { User } from '../../types/user.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  positions: PositionUser[];
  PositionList: PositionUser[];
  selectedPosition: PositionUser;
  PositionRol : string;
  UserId : number; 
  constructor(private userService: UserService
    , private toasterService: ToastrService
    , private aRoute: ActivatedRoute
  ) { 

    this.aRoute.params.subscribe(params => {
      this.UserId = parseInt(params.id);
      if (this.UserId) {

        this.userService.getUserById(this.UserId).then(data => {
       
        });
      }
    });

  }

  ngOnInit() {
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
    this.userService.postUser(form.value).subscribe(data => {
      this.resetForm(form);
      this.toasterService.success("El usuario ha sido agregado", "Registro Usuario");
      this.userService.getUsers();
    })

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

}
