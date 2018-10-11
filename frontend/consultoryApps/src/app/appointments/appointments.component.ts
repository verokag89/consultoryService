import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../shared/appoinment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  providers: [AppoinmentService]
})
export class AppointmentsComponent implements OnInit {
  constructor(private appointmentService: AppoinmentService) { }
  ngOnInit() {
    this.getAllAppointment();
  }

  getAllAppointment(){
    this.appointmentService.getAppointments();
  }
}
