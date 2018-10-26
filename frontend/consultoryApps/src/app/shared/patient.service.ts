import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../types/user.model';
import { Patient } from '../types/patient.model';
import { PathConstants } from '../utils/constant/path.constants';
import { DateFormatPipe } from './pipes/formatDate.pipe';

@Injectable()
export class PatientService {

  selectedPatient: Patient;
  PatientList: Patient[];
  PatientActiveList: Patient[];
  UserList: User[];

  constructor(private http: Http, private format: DateFormatPipe) { }

  postPatient(patient: Patient) {
    let url: string = PathConstants.getWorkingPath(PathConstants.POST_PATIENT);
    var body = JSON.stringify(patient);
    var headerOptions = new Headers({ 'Content-Type': 'applications/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(url, body).map(res => res.json());
  }


  putPatient(patient: Patient) {
    let url: string = PathConstants.getWorkingPath(PathConstants.PUT_PATIENT) + patient.IdPatient;
    var body = JSON.stringify(patient);
    var headerOptions = new Headers({ 'Content-Type': 'applications/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(url, body).map(res => res.json());
  }

  deletePatient(patient: Patient) {
    let url: string = PathConstants.getWorkingPath(PathConstants.DELETE_PATIENT) + patient.IdPatient;
    let promise = new Promise((resolve, reject) => {
      this.http.delete(url)
        .toPromise()
        .then(
          res => { // Success
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;


  }

  getPatients() {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_PATIENTS);

    this.http.get(url).map((data: Response) => {
      return data.json() as Patient[];
    }).toPromise().then(x => {
      this.PatientList = x.sort((a:Patient, b:Patient) => Number(b.Active) - Number(a.Active));

    })
  }

  getActivePatients() : Patient[]{
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_PATIENTS);

    this.http.get(url).map((data: Response) => {
      return data.json() as Patient[];
    }).toPromise().then(x => {
      this.PatientActiveList = x.filter(data=> data.Active= true);
    })
    return this.PatientActiveList;
  }


  getPatientById(patientId: number) {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_PATIENT_BY_ID) + patientId;

    let promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then(
          res => { // Success
            this.selectedPatient = res.json() as Patient;
            this.selectedPatient.BirthDate = this.format.transform(this.selectedPatient.BirthDate);
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;

  }

  getUsers() {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_USER);

    return this.http.get(url).map((data: Response) => {
      return data.json() as User[];
    }).toPromise().then(x => {
      this.UserList = x;
    });
  }
}
