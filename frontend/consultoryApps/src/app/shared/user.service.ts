import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../types/user.model';
import { PositionUser } from '../types/positionuser.model';
import { PathConstants } from '../utils/constant/path.constants';

@Injectable()
export class UserService {


  selectedUser: User;
  UserList : User[];
  PositionList : PositionUser[];
  SelectedPosition: Position;

  constructor(private http : Http) {   }

  postUser(user: User){
    let url : string = PathConstants.getWorkingPath(PathConstants.POST_USER);
    var body = JSON.stringify(user);
    var headerOptions = new Headers({'Content-Type': 'applications/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers : headerOptions});
    return this.http.post(url,body).map(res =>res.json());
  }

  getUsers(){
    let url : string = PathConstants.getWorkingPath(PathConstants.GET_USER);
   
    this.http.get(url).map((data:Response)=>{
      return data.json() as User[];
    }).toPromise().then(x =>{
      this.UserList= x;
    })
  }
    getPostions(){
      let url : string = PathConstants.getWorkingPath(PathConstants.GET_POSITIONS);
   
    return  this.http.get(url).map((data:Response)=>{
        return data.json() as PositionUser[];
      }).toPromise().then(x =>{
        this.PositionList= x;
      });

    /*  return this.http.get(url)
      .toPromise()
      .then(res => {
          return Promise.resolve(res.json().Response);
      });
*/
  }
}
