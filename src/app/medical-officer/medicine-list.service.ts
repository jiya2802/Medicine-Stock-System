import { Injectable } from '@angular/core';
import { Medicine } from '../shared/interfaces/medicine.interface';
import { APP_CONSTANTS } from '../shared/constants/app-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicineDetails } from '../shared/interfaces/medicinedetails.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicineListService {

  constructor(private http:HttpClient) { }

  getMedicineData():Observable<any>{
    return this.http.get(APP_CONSTANTS.BACKEND_URL+'medicine-list')
  }

  getMedicineFromBarcode(barcodeValue: any):Observable<MedicineDetails>{
    return this.http.get<MedicineDetails>(`http://localhost:8080/api/medicine/${barcodeValue}`);
  }
}
