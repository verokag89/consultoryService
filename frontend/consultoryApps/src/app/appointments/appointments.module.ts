
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

@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentsListComponent,
    AppointmentComponent
  ],

  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'citas', component: AppointmentsListComponent },
      { path: 'agregar-cita', component: AppointmentComponent }
    ],

    ),

  ],

  providers: [PatientService],
  bootstrap: []
})
export class AppointmentsModule {

}
