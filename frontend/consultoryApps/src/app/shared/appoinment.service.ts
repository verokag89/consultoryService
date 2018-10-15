import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../types/user.model';

import { PathConstants } from '../utils/constant/path.constants';
import { DateFormatPipe } from './pipes/formatDate.pipe';
import { Appointment } from '../types/appointment.model';
import { Patient } from '../types/patient.model';

@Injectable()
export class AppoinmentService {

  selectedAppointment: Appointment;
  AppointmentList: Appointment[];
  UsersActiveList : User[];
  PatientActiveList: Patient[];
  AppointmentListCurrent: Appointment[];

  constructor(private http: Http, private format: DateFormatPipe) { }

  postAppointment(cita: Appointment) {
    let url: string = PathConstants.getWorkingPath(PathConstants.POST_APPOINMENT);
    var body = JSON.stringify(cita);
    var headerOptions = new Headers({ 'Content-Type': 'applications/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(url, body).map(res => res.json());
  }


  putAppointment(cita: Appointment) {
    let url: string = PathConstants.getWorkingPath(PathConstants.PUT_APPOINMENT) + cita.IdAppointment;
    var body = JSON.stringify(cita);
    var headerOptions = new Headers({ 'Content-Type': 'applications/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(url, body).map(res => res.json());
  }

  deleteAppointment(cita: Appointment) {
    let url: string = PathConstants.getWorkingPath(PathConstants.DELETE_APPOINTMENT) + cita.IdAppointment;
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

  getAppointmentById(cita: number) {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_APPOINTMENT_BY_ID) + cita;

    let promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then(
          res => { // Success
            this.selectedAppointment = res.json() as Appointment;
    
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;

  }


  getAppointments()  {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_APPOINTMENTS);
 
    this.http.get(url).map((data: Response) => {
      return data.json() as Appointment[];
    }).toPromise().then(x => {
      this.AppointmentList = x;
    })
  }

  getAppointmentsCurrent()  {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_APPOINTMENTS_CURRENT) + 'current';
 
    this.http.get(url).map((data: Response) => {
      return data.json() as Appointment[];
    }).toPromise().then(x => {
      this.AppointmentListCurrent = x;
    })
  }

  private handleErrorObservable(error: Response | any) {  
      return Observable.throw(error.message || error);
  }
  
  private handleErrorPromise(error: Response | any) {
      return Promise.reject(error.message || error);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    this.AppointmentList= body as Appointment[];
    return body || {};
  }


  
}
