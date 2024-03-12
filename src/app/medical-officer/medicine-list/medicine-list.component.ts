import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MedicineListService } from '../medicine-list.service';
import { Medicine } from 'src/app/shared/interfaces/medicine.interface';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicineData!:Medicine[]
  ngOnInit(): void {
    this.medicineService.getMedicineData().subscribe((value)=>{
      console.log(value);
      this.medicineData=value;
    })
  }
  constructor(private medicineService:MedicineListService){

  }

}
