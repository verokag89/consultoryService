import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { PatientService } from '../../shared/patient.service';
import { AppoinmentService } from '../../shared/appoinment.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  AppointId: number;
  TitlePage: string;
  PatientNameText : string;
  PatientPhoneText : string;
 
  constructor(
    public userService: UserService, 
    public patientService: PatientService, 
    public appointmentService: AppoinmentService,
    private aRoute: ActivatedRoute,
    private router: Router,
    private toasterService: ToastrService ) {
      this.aRoute.params.subscribe(params => {
        this.AppointId = parseInt(params.id);
      });

   }

  ngOnInit() {
    this.resetForm();

    if (this.AppointId) {
      this.TitlePage = "Editar";
      this.appointmentService.getAppointmentById(this.AppointId).then(data => {
        this.onChangePatient(data);
        var populateSelected =this.appointmentService.selectedAppointment;
        //  this.onSavePatientChanged(this.appointmentService.selectedAppointment.Status);
      });
      var populateSelected2 =this.appointmentService.selectedAppointment;
    }else{
      this.TitlePage = "Agregar";
    }

    this.userService.getUserDoctors();
    this.patientService.getActivePatients();
 //   this.getAllPatient();
  }


  resetForm(form?: NgForm) {

    if (form != null)
      form.reset();

      if (isNaN(this.AppointId)) {
        this.appointmentService.selectedAppointment = {
          IdUser: null,
          IdAppointment: null,
          UserName: '',
          PatientName: '',
          Status: '',
          PatientPhone: '',
          Comments: '',
          IdPatient: null,
          DateAppointment: null,
          Time: ''
        }
      }else{
        this.appointmentService.selectedAppointment = {
          IdUser: null,
          IdAppointment: this.AppointId,
          UserName: '',
          PatientName: '',
          Status: '',
          PatientPhone: '',
          Comments: '',
          IdPatient: null,
          DateAppointment: null,
          Time: ''
        }
      }
   
  }

  onChangePatient($event) {

    if($event != undefined){
      this.appointmentService.selectedAppointment.PatientName =$event.FirstName +" " + $event.LastName;
      this.appointmentService.selectedAppointment.IdPatient = $event.IdPatient;
      this.appointmentService.selectedAppointment.PatientPhone =$event.Phone;

    }


    this.PatientNameText = this.appointmentService.selectedAppointment.PatientName ;
    this.PatientPhoneText= this.appointmentService.selectedAppointment.PatientPhone;

}
  

onOptionsSelected($event){
  this.appointmentService.selectedAppointment.IdUser = $event;
}

onSubmit(form: NgForm){


  if(form.value.IdAppointment == null){

    this.appointmentService.postAppointment(form.value).subscribe(data => {
      this.resetForm(form);
      this.toasterService.success("La cita ha sido guardada", "Registro de Citas");
      this.router.navigateByUrl('/lista-citas');
    })

  }else{

    this.appointmentService.putAppointment(form.value).subscribe(data => {
      this.resetForm(form);
      this.toasterService.success("La cita ha sido editado", "Registro de Citas");
      this.router.navigateByUrl('/lista-citas');
    })

  }
}

}
