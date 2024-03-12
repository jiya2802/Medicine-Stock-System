import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ScanComponent } from './scan/scan.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MedicineListComponent,
    ScanComponent
  ],
  imports: [
    BrowserModule,
    BarcodeScannerLivestreamModule,
    RouterModule
  ]
})
export class MedicalOfficerModule { }
