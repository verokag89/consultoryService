import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Dashboard } from '../types/dashboard.model';
import { PathConstants } from '../utils/constant/path.constants';

@Injectable()
export class DashboardService {


  totals: Dashboard;

  constructor(private http : Http) {   }



  getTotals(): any {
    let url : string = PathConstants.getWorkingPath(PathConstants.GET_TOTALS);
   
    return this.http.get(url).map((data:Response)=>{
      return data.json() as Dashboard;
    }).toPromise().then(x =>{
     return this.totals= x;
    })
   
  }
}
