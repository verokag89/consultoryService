
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ConsultoryComponent } from './consultory/consultory.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppoinmentService } from './shared/appoinment.service';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo :'inicio', pathMatch: 'full'}, 
  { path: 'consultorio', component : ConsultoryComponent },
  { path: 'usuarios', component : UsersComponent },
  { path: 'inicio', component : DashboardComponent },
  { path: 'citas', component: AppointmentsComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [ConsultoryComponent, UsersComponent,  DashboardComponent , AppointmentsComponent, HomeComponent  ]