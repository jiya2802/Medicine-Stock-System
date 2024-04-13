import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent {
  medicineForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private medicineService: MedicineService) {
    this.medicineForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Manufacturer: ['', Validators.required],
      Barcode: ['', Validators.required]
    });
  }

  submit(): void {
    this.medicineService.submit(this.medicineForm.value).subscribe(
      response => {
        console.log("Response from API:", response);
        this.successMessage = 'Medicine added successfully.';
        this.errorMessage = ''; // Clear any previous error message
        this.medicineForm.reset();
      },
      error => {
        console.error("Medicine successfully added", error);
        this.errorMessage = 'Medicine successfully added';
        this.successMessage = ''; // Clear any previous success message
      }
    );
  }
}
