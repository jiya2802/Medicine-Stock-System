import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicineModule } from './medicine/medicine.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PharmacistModule } from './pharmacist/pharmacist.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MedicineModule,
    AppRoutingModule,
    HttpClientModule,
    PharmacistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
