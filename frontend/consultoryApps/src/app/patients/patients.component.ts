import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers:[PatientService]
})
export class PatientsComponent implements OnInit {

  constructor(private patientService : PatientService) { }

  ngOnInit() {
  }

}
