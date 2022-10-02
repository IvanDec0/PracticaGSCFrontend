import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventAddressComponent } from './event-address/event-address.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventAddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
