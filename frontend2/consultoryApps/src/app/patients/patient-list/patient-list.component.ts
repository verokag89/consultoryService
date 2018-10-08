import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../shared/patient.service';

import{ TruncatePipe} from '../../shared/pipes/truncate.pipe';
import { Patient } from '../../types/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  public today: number = Date.now();

  constructor(private patientService: PatientService) { }


  ngOnInit() {
    this.patientService.getPatients();
    this.today= Date.now();
  }

  showForEdit( patient: Patient){
    this.patientService.selectedPatient = Object.assign({}, patient);

  }



}
