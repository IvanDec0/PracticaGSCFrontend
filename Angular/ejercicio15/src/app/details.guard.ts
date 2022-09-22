import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventService } from './services/event.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuard
	implements CanActivate, CanDeactivate<EventDetailsComponent>
{
	constructor(private eventService: EventService) {}

	canDeactivate(
		component: EventDetailsComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot | undefined
	):
		| boolean
		| UrlTree
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree> {
		return component.reviewed;
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const paramID = route.paramMap.get("id");
		if (!paramID) {
			return false;
		}
		return !!this.eventService.getOneEvent(paramID);
	}
}