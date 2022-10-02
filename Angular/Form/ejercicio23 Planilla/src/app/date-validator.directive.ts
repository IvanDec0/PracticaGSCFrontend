import { invalid } from '@angular/compiler/src/render3/view/util';
import { Directive, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

enum FechasBloqueadas {
  Domingo = 0,
  Sabado = 6,
}

@Directive({
  selector: '[appDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator, OnInit {
  ngOnInit() {}

  validate(control: FormControl): ValidationErrors | null{
    let fecha: Date = new Date(control.value);

    if (fecha.getDay() === FechasBloqueadas.Sabado ) {
      return { isSaturday: true, msg: 'No puede ser un dia Sábado'};
    }
    else if (fecha.getDay() === FechasBloqueadas.Domingo){
      return { isSunday: true, msg: 'No puede ser un dia Domingo'};
    }

    else if (fecha.toString() === 'Invalid Date') {
      return {invalidDate: true, msg: 'Fecha invalida'}
    }
    else{
      return null;
    }
  }

  constructor() {}
}