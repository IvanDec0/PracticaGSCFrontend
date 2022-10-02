import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsGuard } from './details.guard';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { DataResolver } from './services/data.resolver';

const routes: Routes = [
    { path: "events", component: EventsListComponent, resolve: {eventos: DataResolver}},
	{ path: "details/:id", component: EventDetailsComponent, 
	canActivate: [DetailsGuard], canDeactivate: [DetailsGuard] },
	{ path: " ", pathMatch: "full", component: AppComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }