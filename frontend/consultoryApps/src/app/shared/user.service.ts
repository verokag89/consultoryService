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
  UserList: User[];
  UserDrList: User[];
  PositionList: PositionUser[];
  SelectedPosition: Position;

  constructor(private http: Http) { }

  postUser(user: User) {
    let url: string = PathConstants.getWorkingPath(PathConstants.POST_USER);
    var body = JSON.stringify(user);
    var headerOptions = new Headers({ 'Content-Type': 'applications/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(url, body).map(res => res.json());
  }

  putUser(user: User) {
    let url: string = PathConstants.getWorkingPath(PathConstants.PUT_USER) + user.IdUser;
    var body = JSON.stringify(user);
    var headerOptions = new Headers({ 'Content-Type': 'applications/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(url, body).map(res => res.json());
  }

  getUsers() {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_USER);

    this.http.get(url).map((data: Response) => {
      return data.json() as User[];
    }).toPromise().then(x => {
      this.UserList = x;
    })
  }

  getUserDoctors() :  User[]{
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_USER);

    this.http.get(url).map((data: Response) => {
      return data.json() as User[];
    }).toPromise().then(x => {
      this.UserDrList = x.filter(data=> data.IdPosition== 1);
    })

    return this.UserDrList ;
  }


  getUserById(userId: number) {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_USER_BY_ID) + userId;

    let promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then(
          res => { // Success
            this.selectedUser = res.json() as User;
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;

  }

  getPostions() {
    let url: string = PathConstants.getWorkingPath(PathConstants.GET_POSITIONS);

    return this.http.get(url).map((data: Response) => {
      return data.json() as PositionUser[];
    }).toPromise().then(x => {
      this.PositionList = x;
    });

    /*  return this.http.get(url)
      .toPromise()
      .then(res => {
          return Promise.resolve(res.json().Response);
      });
*/
  }

  deleteUser(user: User) {
    let url: string = PathConstants.getWorkingPath(PathConstants.DELETE_USER) + user.IdUser;
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
