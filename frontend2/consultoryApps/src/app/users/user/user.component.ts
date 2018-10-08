import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';
import { ToastrService } from 'ngx-toastr';
import { PositionUser } from '../../types/positionuser.model';
import { User } from '../../types/user.model';
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
  constructor(private userService: UserService
    , private toasterService: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
    //this.getPositions();
    this.userService.getPostions();
    console.log("entra:"+ this.userService.selectedUser);
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
    })

  }

  getPositions(): void {

    this.userService.getPostions().then((res: any) => {
      this.PositionList = res;
    }).catch(err => {

      });

  }



}
