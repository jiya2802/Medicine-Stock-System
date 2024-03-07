import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './medicine/add-medicine/add-medicine.component';
import { AddPharmacistComponent } from './pharmacist/add-pharmacist/add-pharmacist.component';
import { SigninComponent } from './auth/signin/signin.component';

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
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }