import { Component, OnInit } from '@angular/core';
import  AOS  from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prayer-request',
  templateUrl: './prayer-request.component.html',
  styleUrls: ['./prayer-request.component.css']
})
export class PrayerRequestComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    AOS.init();
  }

  back(){
    console.log("Back");
    this.router.navigate(['/']);
  }
}
