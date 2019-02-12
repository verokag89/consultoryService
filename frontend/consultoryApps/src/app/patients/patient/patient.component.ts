import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../shared/patient.service';
import { Form } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgbdDatepickerPopup } from '../../shared/components/datepicker-popup'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  PatientId: number;
  TitlePage: string;
  //telPattern: RegExp = /\(?([0-9]{10})\)/;

  constructor(
    public patientService: PatientService,
    private toasterService: ToastrService,
    private aRoute: ActivatedRoute,
    private router: Router) {
    this.aRoute.params.subscribe(params => {
      this.PatientId = parseInt(params.id);
    });

  }
  activePatient: boolean = false;

  ngOnInit() {
    this.resetForm();
    if (this.PatientId) {
      this.TitlePage = "Editar";
      this.patientService.getPatientById(this.PatientId).then(data => {

        this.onSavePatientChanged(this.patientService.selectedPatient.Active);
      });
    } else {
      this.TitlePage = "Agregar";

    }
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.reset();

    if (isNaN(this.PatientId)) {

      this.patientService.selectedPatient = {
        IdPatient: null,
        FirstName: '',
        LastName: '',
        NameSearch: '',
        BirthDate: null,
        Phone: '',
        Phone2: '',
        Active: false,
        Email: '',
        PatientNumber : null
      }
    } else {

      this.patientService.selectedPatient = {
        IdPatient: this.PatientId,
        FirstName: '',
        LastName: '',
        NameSearch: '',
        BirthDate: null,
        Phone: '',
        Phone2: '',
        Active: false,
        Email: '',
        PatientNumber : null
      }

    }



  }

  onSubmit(form: NgForm) {

    if (isNaN(this.PatientId)) {
      this.patientService.selectedPatient.Active = this.activePatient;

      this.patientService.postPatient(this.patientService.selectedPatient).subscribe(data => {
        this.resetForm(form);
        this.patientService.getPatients();
        this.toasterService.success("El paciente ha sido agregado", "Registro Pacientes");
        this.router.navigateByUrl('/pacientes');
      });

    } else {

      this.patientService.selectedPatient.Active = this.activePatient;
      form.value.IdPatient = this.patientService.selectedPatient.IdPatient;
      this.patientService.putPatient(this.patientService.selectedPatient).subscribe(data => {
        this.resetForm(form);
        this.patientService.getPatients();
        this.toasterService.success("El paciente ha sido editado", "Registro Pacientes");
        this.router.navigateByUrl('/pacientes');
      });

    }

  }

  onSavePatientChanged(value: boolean) {
    this.activePatient = value;

  }
}
