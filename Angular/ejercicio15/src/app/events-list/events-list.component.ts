import { Component, OnInit } from '@angular/core';
import { Evento } from '../event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events!: Evento | any;

  constructor(private service: EventService) { }

  ngOnInit() {
    this.events = this.service.getEvents();
  }
  
}
