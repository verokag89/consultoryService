
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

import { PatientService } from '../shared/patient.service';
import { PositionUser } from '../types/positionuser.model';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { AppointmentsComponent } from './appointments.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentsListComponent } from '../appointments/appointments-list/appointments-list.component';
import { AppointmentComponent } from '../appointments/appointment/appointment.component'
import { UserService } from '../shared/user.service';
import { AppoinmentService } from '../shared/appoinment.service';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppointmentsListComponent,
    AppointmentComponent
  ],

  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgSelectModule,
    RouterModule.forChild([
      { path: 'lista-citas', component: AppointmentsListComponent },
      { path: 'agregar-cita', component: AppointmentComponent }
    ],

    ),

  ],

  providers: [PatientService, UserService, AppoinmentService],
  bootstrap: []
})
export class AppointmentsModule {

}
