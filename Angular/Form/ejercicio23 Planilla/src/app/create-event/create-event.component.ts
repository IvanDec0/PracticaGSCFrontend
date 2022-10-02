import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event';
import { NgModel, ValidationErrors } from '@angular/forms';
import { DateValidatorDirective } from '../date-validator.directive';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  model:Event={
    id: undefined,
    name: '',
    date: '',
    time: '',
    location: {
      address: '',
      city: '',
      country: ''
    }
  }

  validator(input:NgModel):boolean {
    return input.control.invalid && input.control.touched  
  }

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(['/events']);
  }

  save(){
    this.eventService.saveEvent(this.model);
    this.router.navigate(['/events']);
  }

  getErrorMsg(errors:ValidationErrors | null):string|null{
    if(!errors) return null
    if(errors['pattern']) return "Deben ser dos letras en mayusculas"
    if(errors['required']) return "Requerido"
    if(errors['invalidDate']) return (errors['msg'])
    if(errors['isSaturday']) return (errors['msg'])
    if(errors['isSunday']) return (errors['msg'])
    else return null;
  }

}