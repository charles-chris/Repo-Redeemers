import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  EventTimer:any;
  constructor() { }

  ngOnInit() {
  }

  eventDate = new Date("march 24, 2021 15:37:25").getTime();

  eventGap = setInterval(() =>{
    var now:any = new Date();
    var difference = this.eventDate - now;
    var days = Math.floor(difference/(1000*60*60*24));
    var hours = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
    var mins = Math.floor((difference % (1000*60*60))/ (1000*60));
    var sec = Math.floor((difference % (1000*60)) / (1000));

    this.EventTimer = days +" Day(s) "+hours+" Hrs "+mins+" Min "+sec+" Sec ";

    if(difference < 0) {
      clearInterval(this.EventTimer);
      this.EventTimer = "No event to Display";
    }

  })


}
