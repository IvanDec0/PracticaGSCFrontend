import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events!: Evento[];

  constructor(private service: EventService, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['eventos']
    //this.events = this.service.getEvents();
  }
  
}
