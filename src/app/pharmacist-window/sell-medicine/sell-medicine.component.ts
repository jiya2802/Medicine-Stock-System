import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { MedicineListService } from 'src/app/medical-officer/medicine-list.service';
import { MedicineDetails } from 'src/app/shared/interfaces/medicinedetails.interface';
import { HttpClient } from '@angular/common/http';
import { APP_CONSTANTS } from 'src/app/shared/constants/app-constants';

@Component({
  selector: 'app-sell-medicine',
  templateUrl: './sell-medicine.component.html',
  styleUrls: ['./sell-medicine.component.css']
})
export class SellMedicineComponent implements OnInit {

  constructor(private medicineService: MedicineListService, private cdr: ChangeDetectorRef, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.barecodeScanner.start();
  }

  @ViewChild(BarcodeScannerLivestreamComponent)
  barecodeScanner!: BarcodeScannerLivestreamComponent;

  medicineDetails!: MedicineDetails;
  barcodeValue: any;

  onValueChanges(result: { codeResult: { code: any; }; }) {
    if (result && result.codeResult && result.codeResult.code) {
      this.barcodeValue = result.codeResult.code;
      this.medicineService.getMedicineFromBarcode(this.barcodeValue).subscribe({
        next: (value: MedicineDetails) => {
          this.medicineDetails = value;
          console.log(this.medicineDetails)
          this.cdr.detectChanges();
        },
        error: (error: any) => {
          console.error("Error fetching medicine details:", error);
        }
      });
    } else {
      console.error("Invalid or missing barcode data in the result:", result);
    }
  }
  

  onStarted() {
    this.barecodeScanner.start();
  }

  onStop() {
    this.barecodeScanner.stop();
  }

  decreaseMedicineQuantity() {
    if (this.medicineDetails && this.medicineDetails.Barcode) {
      this.http.post<any>(APP_CONSTANTS.BACKEND_URL + 'decrease-medicine-quantity', { Barcode: this.medicineDetails.Barcode })
        .subscribe({
          next: (response) => {
            console.log('Medicine quantity decreased successfully.');
          },
          error: (error) => {
            console.error('Error decreasing medicine quantity:', error);
          }
        });
    } else {
      console.error('No medicine details available.');
    }
  }
  
}
