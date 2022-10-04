import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  appid = "69bc9bb1bbaa496601358677ea57a017";
  forecast:any;
  city!:string;

  constructor(private service: RequestService) { }

  ngOnInit() {
  }

  makeRequest() {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=" + this.appid;
    this.service.getData(url).subscribe(res=>{this.forecast=res;
    this.forecast.main.temp=Math.round(this.forecast.main.temp- 273.15);
    this.forecast.main.temp_max=Math.round(this.forecast.main.temp_max - 273.15);
    this.forecast.main.temp_min=Math.round(this.forecast.main.temp_min - 273.15);
  },
      err=>console.log(err)
    );
    console.log(this.forecast)
  }

}

