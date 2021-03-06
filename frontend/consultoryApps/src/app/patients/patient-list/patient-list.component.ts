import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../shared/patient.service';

import{ TruncatePipe} from '../../shared/pipes/truncate.pipe';
import { Patient } from '../../types/patient.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  public today: number = Date.now();
  public searchText: string;
  public p: number;
  constructor(public patientService: PatientService, private routes: Router, private toasterService:ToastrService) { }


  ngOnInit() {
    this.patientService.getPatients();
    this.today= Date.now();
  }

  showForEdit( patient: Patient){
    this.patientService.selectedPatient = Object.assign({}, patient);

  }

  public onEdit(element: any): void {
    this.routes.navigate(['editar-paciente', element.IdPatient]);
  }

  public onDelete(element: any): void {
      this.patientService.deletePatient( element).then( data =>{
        this.toasterService.success("El paciente ha sido eliminado", "Registro Paciente");
        this.patientService.getPatients();
      }).catch(error=> {
        console.log(error._body);
        let errormsg = error._body;
        if(errormsg.toString().match("409") != null){
          this.toasterService.warning("El paciente cuenta con citas, Eliminar sus citas para poder eliminar a el Paciente", "Registro Paciente");
        }
       
        this.toasterService.error("No se pudo eliminar el paciente", "Registro Paciente");
      });
  
  }

}
