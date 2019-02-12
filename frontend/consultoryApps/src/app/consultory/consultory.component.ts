import { Component, OnInit } from '@angular/core';
import { Consultory } from '../types/consultory.model';
import { ToastrService } from 'ngx-toastr';
import { ConsultoryService } from '../shared/consultory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consultory',
  templateUrl: './consultory.component.html',
  styleUrls: ['./consultory.component.scss'],
  providers: [ConsultoryService]
})

export class ConsultoryComponent implements OnInit {

  public p: number;
  titlePage :string =   this.consultoryService.titlePage ;
  ConsultoryList: Consultory[];
  selectedConsultory : Consultory;
  
  constructor(public consultoryService: ConsultoryService
    , private toasterService: ToastrService
  ) {


   }

  ngOnInit() {
    this.resetForm();
    this.consultoryService.getConsultory();
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.reset();

    this.consultoryService.selectedConsultory = {
      IdConsultory: null,
      Name: '',
      Location: '',
      Phone: '',
      Logo: ''
    }
    this.consultoryService.titlePage = "Agregar Consultorio";
    this.titlePage = this.consultoryService.titlePage;
  }

  onSubmit(form: NgForm) {

    if(form.value.IdConsultory == null){
      this.consultoryService.postConsultory(form.value).subscribe(data => {
        this.resetForm(form);
        this.toasterService.success("El consultorio ha sido agregado", "Registro Consultorio");
        this.consultoryService.getConsultory();
    
  
      });
    }else{
      this.consultoryService.putConsultory(form.value).subscribe(data => {
        this.resetForm(form);
        this.toasterService.success("El consultorio ha sido editdo", "Registro Consultorio");
        this.consultoryService.getConsultory();
    
  
      });
    }

   

  }
  showForEdit( consult?: Consultory){
    this.consultoryService.selectedConsultory = Object.assign({}, consult);
    this.consultoryService.titlePage = "Editar Consultorio";
    this.titlePage =  this.consultoryService.titlePage ;
  }

  onDelete( consult: Consultory){
    this.consultoryService.deleteConsultory(consult).then(
      data=>{
        this.resetForm();
        this.consultoryService.getConsultory();
        this.toasterService.success("El consultorio ha sido eliminado", "Registro Consultorio");
      }
    ).catch(error=>{
      this.toasterService.error("Error: El consultorio no pudo ser eliminado", "Registro Consultorio");

    }
    );
  }

}
