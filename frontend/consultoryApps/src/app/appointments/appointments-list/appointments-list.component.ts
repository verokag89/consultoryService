import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../../shared/appoinment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
  providers: [AppoinmentService]
})
export class AppointmentsListComponent implements OnInit {

  constructor(private appointmentService: AppoinmentService) { }

  ngOnInit() {
    this.getAllAppointment();
  }

  getAllAppointment(){
    this.appointmentService.getAppointments();
  }
}
