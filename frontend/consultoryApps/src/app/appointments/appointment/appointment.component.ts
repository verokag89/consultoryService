import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { PatientService } from '../../shared/patient.service';
import { AppoinmentService } from '../../shared/appoinment.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  AppointId: number;
  TitlePage: string;
 
  constructor(
    private userService: UserService, 
    private patientService: PatientService, 
    private appointmentService: AppoinmentService,
    private aRoute: ActivatedRoute,
    private router: Router ) {
      this.aRoute.params.subscribe(params => {
        this.AppointId = parseInt(params.id);
      });

   }

  ngOnInit() {
    this.resetForm();

    if (this.AppointId) {
      this.TitlePage = "Editar";

    }else{
      this.TitlePage = "Agregar";
    }

    this.getAllUser();
    this.getAllPatient();
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
          DateTime: null
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
          DateTime: null
        }
      }
   
  }
  
  getAllUser(){
    this.appointmentService.UsersActiveList = this.userService.getUserDoctors();
    this.appointmentService.UsersActiveList= this.userService.UserDrList;
  }

  getAllPatient(){
    this.appointmentService.PatientActiveList =  this.patientService.getActivePatients();

  }



}
