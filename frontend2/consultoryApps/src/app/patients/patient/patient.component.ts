import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../shared/patient.service';
import { Form } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {NgbdDatepickerPopup} from '../../shared/components/datepicker-popup'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private patientService: PatientService, private toasterService:ToastrService) { }
  activePatient: boolean= false;

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form? : NgForm){

    if(form != null)
      form.reset();

    this.patientService.selectedPatient ={
      IdPatient: null,
      FirstName: '',
      LastName: '',
      BirthDate: null,
      Phone: '',
      Phone2: '',
      Active: false,
      Email : ''

    }


  }

  onSubmit(form: NgForm) {

    if(form.value.IdPatient= null){

      form.value.Active = this.activePatient;
      this.patientService.postPatient(form.value).subscribe(data => {
        this.resetForm(form);
        this.patientService.getPatients();
        this.toasterService.success("El paciente ha sido agregado", "Registro Pacientes");
      });
  
    }else{

      form.value.Active = this.activePatient;
      this.patientService.putPatient(form.value).subscribe(data => {
        this.resetForm(form);
        this.patientService.getPatients();
        this.toasterService.success("El paciente ha sido agregado", "Registro Pacientes");
      });
    }

  }

  onSavePatientChanged(value:boolean){
    this.activePatient = value;

  }
}
