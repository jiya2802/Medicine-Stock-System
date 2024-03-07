import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  constructor(private http:HttpClient) {

  }

  pharm(body:any):Observable<any>{
    return this.http.post(APP_CONSTANTS.BACKEND_URL+'pharmacist',body)
    
  }
}
