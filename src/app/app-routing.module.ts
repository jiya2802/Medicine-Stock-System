import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './medicine/add-medicine/add-medicine.component';
import { AddPharmacistComponent } from './pharmacist/add-pharmacist/add-pharmacist.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MedicalOfficerModule } from './medical-officer/medical-officer.module';
import { MedicineListComponent } from './medical-officer/medicine-list/medicine-list.component';
import { mergeScan } from 'rxjs';
import { ScanComponent } from './medical-officer/scan/scan.component';
import { LoginComponent } from './auth/login/login.component';
import { MedicinesListComponent } from './pharmacist-window/medicines-list/medicines-list.component';
import { SingleMedicineComponent } from './pharmacist-window/single-medicine/single-medicine.component';
import { OutOfStockComponent } from './pharmacist-window/out-of-stock/out-of-stock.component';
import { PDashboardComponent } from './pharmacist-window/p-dashboard/p-dashboard.component';
import { SellMedicineComponent } from './pharmacist-window/sell-medicine/sell-medicine.component';
import { BarcodeScannerComponent } from './pharmacist-window/barcode-scanner/barcode-scanner.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
      path:'',
      component:SigninComponent
    },
    {
        path:'medicine',
        component:AddMedicineComponent
    },
    {
      path:'pharmacist',
      component:AddPharmacistComponent
    },
    {
      path:'medicalOfficer',
      component:MedicineListComponent
    },
    {
      path:'medicalOfficer/scan',
      component:ScanComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'pharmacist/medicines',
      component:MedicinesListComponent
    },
    {
      path:'Medicine/:ID',
      component:SingleMedicineComponent
    },
    {
      path:'pharmacist/outOfStock',
      component:OutOfStockComponent
    },
    {
      path:'pdashboard',
      component:PDashboardComponent
    },
    {
      path:'pharmacist/sell',
      component:SellMedicineComponent
    },
    {
      path:'admin',
      component:AdminComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }