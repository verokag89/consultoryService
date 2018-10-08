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

 
  titlePage :string =   this.consultoryService.titlePage ;
  ConsultoryList: Consultory[];
  selectedConsultory : Consultory;
  constructor(private consultoryService: ConsultoryService
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
  }

  onSubmit(form: NgForm) {

    if(form.value.IdPatient= null){

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


}
