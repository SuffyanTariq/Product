import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  readonly productApiUrl = "https://localhost:7278/api"
  constructor(private http:HttpClient) { }

  getProducts(): Observable<any[]>{
    return this.http.get<any>(this.productApiUrl + '/Product/GetProducts');
  }
  addProduct(data:any){
    return this.http.post(this.productApiUrl + '/Product/SaveProduct', data);
  }
  updateProduct(id: number|string, data:any){
    return this.http.put(`${this.productApiUrl}/Product/UpdateProduct/${id}`, data);
    // return this.http.put(this.productApiUrl + '/Product/UpdateProduct/${id}', data);
  }
  deleteProduct(id:number|string){
    return this.http.delete(`${this.productApiUrl}/Product/DeleteProduct/${id}`);
    // return this.http.delete(this.productApiUrl + '/Product/DeleteProduct/${id}');
  }

}
