import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoedetails } from './Shoedetails';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  private shoeUrl = '/db.json'; // Adjust the path to your JSON file

  constructor(private http: HttpClient) { }

  getShoes(): Observable<Shoedetails[]> {
    return this.http.get<Shoedetails[]>(this.shoeUrl);
  }
}
