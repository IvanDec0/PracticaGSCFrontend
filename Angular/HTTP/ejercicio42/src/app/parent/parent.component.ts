import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ResponseApi } from '../response';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList!: ResponseApi[]; // Corregir

  constructor(private service: HttpService) { }

  ngOnInit() {
    
  }

  makeRequest() {
    this.service.getData().subscribe(
      res=>{this.movieList=res},
      err=>console.log(err)
    );
  }
}
