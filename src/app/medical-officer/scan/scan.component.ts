import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { MedicineListService } from '../medicine-list.service';
import { MedicineDetails } from 'src/app/shared/interfaces/medicinedetails.interface';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent {
  constructor(private medicineService: MedicineListService, private cdr: ChangeDetectorRef) { }

  medicineDetails!: MedicineDetails;
  @ViewChild(BarcodeScannerLivestreamComponent)
  barecodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  onValueChanges(result: { codeResult: { code: any; }; }) {
    console.log("Barcode scan result:", result);
    if (result && result.codeResult && result.codeResult.code) {
      this.barcodeValue = result.codeResult.code;
      console.log("Detected barcode value:", this.barcodeValue);
      this.medicineService.getMedicineFromBarcode(this.barcodeValue).subscribe(
        (value) => {
          console.log("Response from service:", value);
          console.log("value:-",value);
          this.medicineDetails = value;
          console.log("Medicine details:", this.medicineDetails);
          // Trigger change detection manually
          this.cdr.detectChanges();
        },
        (error) => {
          console.error("Error fetching medicine details:", error);
        }
      );
    } else {
      console.error("Invalid or missing barcode data in the result:", result);
    }
  }

  onStarted() {
    console.log('start');
    this.barecodeScanner.start();
  }

  onStop() {
    console.log('stop');
    this.barecodeScanner.stop();
  }
}


