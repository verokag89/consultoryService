import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../types/user.model';
import { Patient } from '../types/patient.model';
import { PathConstants } from '../utils/constant/path.constants';

@Injectable()
export class PatientService {


  selectedPatient: Patient;
  PatientList : Patient[];
  UserList : User[];

  constructor(private http : Http) {   }

  postPatient(patient: Patient){
    let url : string = PathConstants.getWorkingPath(PathConstants.POST_PATIENT);
    var body = JSON.stringify(patient);
    var headerOptions = new Headers({'Content-Type': 'applications/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers : headerOptions});
    return this.http.post(url,body).map(res =>res.json());
  }


  putPatient(patient: Patient){
    let url : string = PathConstants.getWorkingPath(PathConstants.PUT_PATIENT) + "id=" + patient.IdPatient;
    var body = JSON.stringify(patient);
    var headerOptions = new Headers({'Content-Type': 'applications/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers : headerOptions});
    return this.http.put(url,body).map(res =>res.json());
  }



  getPatients(){
    let url : string = PathConstants.getWorkingPath(PathConstants.GET_PATIENTS);
   
    this.http.get(url).map((data:Response)=>{
      return data.json() as Patient[];
    }).toPromise().then(x =>{
      this.PatientList= x;
    })
  }
    getUsers(){
      let url : string = PathConstants.getWorkingPath(PathConstants.GET_USER);
   
    return  this.http.get(url).map((data:Response)=>{
        return data.json() as User[];
      }).toPromise().then(x =>{
        this.UserList= x;
      });

 
  }
}
