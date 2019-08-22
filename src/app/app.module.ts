import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentloginComponent } from './logins/studentlogin/studentlogin.component';
import { StaffloginComponent } from './logins/stafflogin/stafflogin.component';
import { GuestloginComponent } from './logins/guestlogin/guestlogin.component';
import { GuestsignupComponent } from './logins/guestsignup/guestsignup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HodReportComponent } from './reports/hod-report/hod-report.component';
import { StaffReportComponent } from './reports/staff-report/staff-report.component';



@NgModule({
  declarations: [
    AppComponent,
    HodReportComponent,
    StaffReportComponent,
    StudentloginComponent,
    StaffloginComponent,
    GuestloginComponent,
    GuestsignupComponent,
    HomeComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
