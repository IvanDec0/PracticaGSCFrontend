import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { EventService } from "../event.service";

@Component({
	selector: "app-create-event",
	templateUrl: "./create-event.component.html",
	styleUrls: ["./create-event.component.css"],
})
export class CreateEventComponent implements OnInit {
	formEvent = this.fb.group({
		name: "",
		date: "",
		time: "",
		location: this.fb.group({ address: "", city: "", country: "" }),
	});



	saveEvent() {
		this.eventService.saveEvent(this.formEvent.value);
		this.router.navigate(["/events"]);
	}

	constructor(
		private eventService: EventService,
		private router: Router,
		private fb: FormBuilder
	) {}

	ngOnInit() {}

	cancel() {
    this.router.navigate(["/events"]);
	}
}