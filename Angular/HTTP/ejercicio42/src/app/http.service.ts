import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseApi } from './response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'https://swapi.dev/api/films/';
  constructor(private http: HttpClient) { }

  getData(): Observable<ResponseApi[]> {
    return this.http.get(this.url)
      .pipe(map(
        (response: any) => {
          const data = response.results;
          return data;
        }));
}
}
