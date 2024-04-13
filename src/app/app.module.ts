import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { MedicineModule } from './medicine/medicine.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PharmacistModule } from './pharmacist/pharmacist.module';
import { MedicalOfficerModule } from './medical-officer/medical-officer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { PharmacistWindowModule } from './pharmacist-window/pharmacist-window.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MedicineModule,
    AppRoutingModule,
    HttpClientModule,
    PharmacistModule,
    MedicalOfficerModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    PharmacistWindowModule,
    ZXingScannerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
