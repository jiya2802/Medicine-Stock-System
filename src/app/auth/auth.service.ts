import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/User.interface';
import { HttpClient } from '@angular/common/http';
import { APP_CONSTANTS } from '../shared/constants/app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  submit(body:any):Observable<any> {
    return this.http.post(APP_CONSTANTS.BACKEND_URL+'register',body);
  }

  login(body:any):Observable<any> {
    return this.http.post(APP_CONSTANTS.BACKEND_URL+'login',body);
  }


}
