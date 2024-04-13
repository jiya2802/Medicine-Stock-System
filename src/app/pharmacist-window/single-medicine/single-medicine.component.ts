import { Component } from '@angular/core';
import { MedicineDetails } from 'src/app/shared/interfaces/medicinedetails.interface';
import { PharmacistWindowServiceService } from '../pharmacist-window-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-medicine',
  templateUrl: './single-medicine.component.html',
  styleUrls: ['./single-medicine.component.css']
})
export class SingleMedicineComponent {
  ID!: number;
  MedicinesData: MedicineDetails[] = []; // Change to array type
  constructor(private pharmacistwindowService: PharmacistWindowServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      this.ID = value['ID'];
      console.log(this.ID);
      this.pharmacistwindowService.getSingleMedicine(this.ID).subscribe((data) => { // Adjusted method call
        this.MedicinesData = data; // Assign the data to MedicinesData
        console.log(this.MedicinesData);
      });
    });
  }
}
