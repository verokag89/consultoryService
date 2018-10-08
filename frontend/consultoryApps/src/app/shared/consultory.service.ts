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

  putConsultory(user: Consultory){
    let url : string = PathConstants.getWorkingPath(PathConstants.PUT_CONSULTORY);
    var body = JSON.stringify(user);
    var headerOptions = new Headers({'Content-Type': 'applications/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers : headerOptions});
    return this.http.post(url,body).map(res =>res.json());
  }

  getConsultory(){
    let url : string = PathConstants.getWorkingPath(PathConstants.GET_CONSULTORY);
   
    this.http.get(url).map((data:Response)=>{
      return data.json() as Consultory[];
    }).toPromise().then(x =>{
      this.ConsultoryList= x;
    })
  }
   
 
}
