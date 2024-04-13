import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app-constants';
import { HttpClient } from '@angular/common/http';
import { MedicineDetails } from '../shared/interfaces/medicinedetails.interface';

@Injectable({
  providedIn: 'root'
})
export class PharmacistWindowServiceService {
  getMedicineFromBarcode(barcodeValue: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {

   }
   getMedicineData():Observable<any>{
    return this.http.get(APP_CONSTANTS.BACKEND_URL+'medicine-list')
  }

  getSingleMedicine(ID:number):Observable<MedicineDetails[]>{
    return this.http.get<MedicineDetails[]>(`http://localhost:8080/api/Medicine/${ID}`)
  }

  getOutOfStockMedicines():Observable<MedicineDetails[]>{
    return this.http.get<MedicineDetails[]>(`http://localhost:8080/api/pharmacist/outOfStock`)
  }

}
