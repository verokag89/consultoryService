import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../shared/patient.service';

import{ TruncatePipe} from '../../shared/pipes/truncate.pipe';
import { Patient } from '../../types/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  public today: number = Date.now();

  constructor(private patientService: PatientService, private routes: Router) { }


  ngOnInit() {
    this.patientService.getPatients();
    this.today= Date.now();
  }

  showForEdit( patient: Patient){
    this.patientService.selectedPatient = Object.assign({}, patient);

  }

  public onEdit(element: any): void {
    this.routes.navigate(['editar-paciente', element.IdPatient]);
}

public onDelete(element: any): void {
    this.patientService.deletePatient( element).then( data =>{

      this.patientService.getPatients();
    });
 
}

}
