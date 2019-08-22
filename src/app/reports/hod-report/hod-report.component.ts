import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hod-report',
  templateUrl: './hod-report.component.html',
  styleUrls: ['./hod-report.component.css']
})
export class HodReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log('Button clicked');    
  }
}
