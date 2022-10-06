import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges{

  @Input() quantity: number = 0;
  squaredQuantity: number = 0;

  constructor() { }
  
  ngOnChanges(): void {
    this.squaredQuantity= this.quantity*this.quantity;
  }

  ngOnInit() {
  }

}
