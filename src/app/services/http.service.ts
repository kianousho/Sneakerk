import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpClient = inject(HttpClient);

  constructor() { }

  getAllShoes(){
    return this.httpClient.get("http://localhost:3000/");
  }

  getShoesById(id: number){
    return this.httpClient.get(`http://localhost:3000/${id}`);
  }
}
