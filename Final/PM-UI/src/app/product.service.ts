import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
  loadAllProducts(){
    return this.http.get("http://localhost:8080/api/products");
  }
}
