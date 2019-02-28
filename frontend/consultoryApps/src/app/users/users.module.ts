
import { NgModule, ModuleWithProviders, InjectionToken} from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserService } from '../shared/user.service';
import { PositionUser } from '../types/positionuser.model';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent
  ],

  imports: [
    RouterModule,
  RouterModule.forChild([
        { path: 'usuarios', component : UsersComponent },
        { path: 'usuarios/:id', component : UsersComponent }

      ],
      
  ),
  SharedModule
  ],

  providers: [UserService],
  bootstrap: []
})
export class UsersModule { 

}
