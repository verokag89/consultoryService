import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../../shared/appoinment.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
  providers: [AppoinmentService]
})
export class AppointmentsListComponent implements OnInit {


  constructor(
     private appointmentService: AppoinmentService,
     private routes: Router,
     private toasterService : ToastrService) { }

  ngOnInit() {
    this.getAllAppointment();
  }

  getAllAppointment(){
    this.appointmentService.getAppointments();
  }

  public onEdit(element: any): void {
    this.routes.navigate(['editar-cita', element]);
  }

  public onDelete(element: any): void{
    this.appointmentService.deleteAppointment(element).then( data =>{
      this.toasterService.success("La consulta ha sido eliminada", "Registro Consulta");
      this.appointmentService.getAppointments();
    });
  }
}
