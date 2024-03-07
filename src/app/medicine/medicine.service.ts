import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) {

  }

  submit(body:any):Observable<any>{
    return this.http.post(APP_CONSTANTS.BACKEND_URL+'medicine',body)
  }
}
