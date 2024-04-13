import { Component } from '@angular/core';
import { PharmacistWindowServiceService } from '../pharmacist-window-service.service';
import { Medicine } from 'src/app/shared/interfaces/medicine.interface';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent {
  medicineData!:Medicine[]
  ngOnInit(): void {
    this.pharmacistwindowService.getMedicineData().subscribe((value)=>{
      console.log(value);
      this.medicineData=value;
    })
  }
  constructor(private pharmacistwindowService:PharmacistWindowServiceService){}
}
