import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Consultory } from '../types/consultory.model';
import { PathConstants } from '../utils/constant/path.constants';

@Injectable()
export class ConsultoryService {


  selectedConsultory: Consultory;
  ConsultoryList : Consultory[];
  titlePage: string= "Agregar Consultorio";

  constructor(private http : Http) {   }

  postConsultory(user: Consultory){
    let url : string = PathConstants.getWorkingPath(PathConstants.POST_CONSULTORY);
    var body = JSON.stringify(user);
    var headerOptions = new Headers({'Content-Type': 'applications/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers : headerOptions});
    return this.http.post(url,body).map(res =>res.json());
  }

  putConsultory(consult: Consultory){
    let url : string = PathConstants.getWorkingPath(PathConstants.PUT_CONSULTORY)+consult.IdConsultory;
    var body = JSON.stringify(consult);
    var headerOptions = new Headers({'Content-Type': 'applications/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Put, headers : headerOptions});
    return this.http.put(url,body).map(res =>res.json());
  }

  getConsultory(){
    let url : string = PathConstants.getWorkingPath(PathConstants.GET_CONSULTORY);
   
    this.http.get(url).map((data:Response)=>{
      return data.json() as Consultory[];
    }).toPromise().then(x =>{
      this.ConsultoryList= x;
    })
  }

  deleteConsultory(consultory: Consultory) {
    let url: string = PathConstants.getWorkingPath(PathConstants.DELETE_CONSULTORY) + consultory.IdConsultory;
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


}
