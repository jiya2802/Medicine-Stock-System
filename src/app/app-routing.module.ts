import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './medicine/add-medicine/add-medicine.component';
import { AddPharmacistComponent } from './pharmacist/add-pharmacist/add-pharmacist.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MedicalOfficerModule } from './medical-officer/medical-officer.module';
import { MedicineListComponent } from './medical-officer/medicine-list/medicine-list.component';
import { mergeScan } from 'rxjs';
import { ScanComponent } from './medical-officer/scan/scan.component';

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
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }