import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event!: Evento | undefined;
	public reviewed: boolean = false;
	constructor(
		private eventService: EventService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
    const snapshot = this.route.snapshot;
		const paramId = snapshot.paramMap.get("id");
		this.event = this.eventService.getOneEvent(paramId!);
	}
	chkChange() {
		this.reviewed = !this.reviewed;
	}
	returnToEvents(): void {
		this.router.navigateByUrl("/events");
	}
}
