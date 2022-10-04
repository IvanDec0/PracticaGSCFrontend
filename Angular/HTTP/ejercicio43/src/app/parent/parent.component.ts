import { Component, OnInit } from '@angular/core';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject;
  output: string[] = [];
  
  constructor() {
    this.subject = new Subject();
  }

  ngOnInit(): void {
    this.subject.pipe(map((upperKey:any) => {
      const upperCases = upperKey.toUpperCase()
      return upperCases 
    }))
    .subscribe((key:any) => {
      this.output.push(key)
    });
    
  }

  keypress(e: any): void {
    this.subject.next(e.key);
  }
  
}

