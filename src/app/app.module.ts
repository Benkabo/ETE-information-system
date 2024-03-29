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



@NgModule({
  declarations: [
    AppComponent,
    StudentloginComponent,
    StaffloginComponent,
    GuestloginComponent,
    GuestsignupComponent,
    HomeComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 