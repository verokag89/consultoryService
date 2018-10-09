
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ConsultoryComponent } from './consultory/consultory.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo :'inicio', pathMatch: 'full'}, 
  { path: 'consultorio', component : ConsultoryComponent },
  { path: 'inicio', component : DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [ConsultoryComponent ,DashboardComponent   ]