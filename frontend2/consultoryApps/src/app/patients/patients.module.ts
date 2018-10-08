
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

import { PatientService } from '../shared/patient.service';
import { PositionUser } from '../types/positionuser.model';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsComponent } from './patients.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PatientsComponent,
    PatientComponent,
    PatientListComponent
  ],

  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'pacientes', component: PatientsComponent },
      { path: 'agregar-paciente', component: PatientComponent },
      { path: 'editar-paciente/:id', component: PatientComponent ,data: { parent: 'pacientes' }}
    ],

    ),

  ],

  providers: [PatientService],
  bootstrap: []
})
export class PatientsModule {

}
