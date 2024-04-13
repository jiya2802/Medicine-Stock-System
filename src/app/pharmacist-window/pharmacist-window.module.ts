import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { SingleMedicineComponent } from './single-medicine/single-medicine.component';
import { OutOfStockComponent } from './out-of-stock/out-of-stock.component';
import { PDashboardComponent } from './p-dashboard/p-dashboard.component';
import { SellMedicineComponent } from './sell-medicine/sell-medicine.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MedicinesListComponent,
    SingleMedicineComponent,
    OutOfStockComponent,
    PDashboardComponent,
    SellMedicineComponent,
    BarcodeScannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    BrowserModule,
    BarcodeScannerLivestreamModule,
    RouterModule
  ]
})
export class PharmacistWindowModule { }
