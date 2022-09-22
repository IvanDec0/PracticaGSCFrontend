import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Evento } from '../event';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
eventos!:Evento[]
  constructor(private service: EventService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.eventos = this.service.getEvents();
    return of(this.eventos);
  }
}
