import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { PatientService } from '../../shared/patient.service';
import { AppoinmentService } from '../../shared/appoinment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

 
  constructor(private userService: UserService, private patientService: PatientService, private appointmentService: AppoinmentService ) { }

  ngOnInit() {
    this.resetForm();
    this.getAllUser();
    this.getAllPatient();
  }


  resetForm(form?: NgForm) {

    if (form != null)
      form.reset();

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
  }
  
  getAllUser(){
    this.appointmentService.UsersActiveList = this.userService.getUserDoctors();
    this.appointmentService.UsersActiveList= this.userService.UserDrList;
  }

  getAllPatient(){
    this.appointmentService.PatientActiveList =  this.patientService.getActivePatients();

  }



}
