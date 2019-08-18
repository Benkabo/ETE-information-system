import { StaffloginComponent } from './logins/stafflogin/stafflogin.component';
import { StudentloginComponent } from './logins/studentlogin/studentlogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestloginComponent } from './logins/guestlogin/guestlogin.component';
import { HomeComponent } from './home/home.component';
import { GuestsignupComponent } from './logins/guestsignup/guestsignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'logins/guestlogin', component: GuestloginComponent },
  {path: 'logins/stafflogin', component: StaffloginComponent },
  {path: 'logins/studentlogin', component: StudentloginComponent},
  {path: 'logins/guestsignup', component: GuestsignupComponent},
  {path: 'dashboard', component: DashboardComponent}
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
