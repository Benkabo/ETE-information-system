import { Component, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: any;

 
  

  constructor() { }

  afterclick(){
   
   
    this.router.navigateByUrl('/logins/guestlogin');
    
  }

  ngOnInit() {
  }

}
