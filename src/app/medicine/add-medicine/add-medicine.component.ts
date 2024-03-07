import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicineForm!: FormGroup;
  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm():void{
    this.medicineForm = new FormGroup({
      Name : new FormControl(),
      Description: new FormControl(),
      Manufacturer: new FormControl(),
      Barcode: new FormControl()
    })}

  submit():void{
    this.medicineService.submit(this.medicineForm.value).subscribe((value)=>{
      console.log("submitted..")
    })
  }

}
