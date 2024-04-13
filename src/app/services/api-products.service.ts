import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httpClient:HttpClient) {

   }
   deleteProduct(id: number): Observable<any> {
      return this.httpClient.delete(`${environment.baseUrl}/products/${id}`);
    }

   getAllProducts():Observable<Iproduct[]>
   {
      return  this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`);
   }

   getProductById(id:number):Observable<Iproduct>{

      return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
   
     }
   getProductByCatId(catId: number): Observable<Iproduct[]> {
 
      return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products?catId=${catId}`);
    }

   addNewProduct(product :Iproduct):Observable<Iproduct>
   {
return this.httpClient.post<Iproduct>(`${environment.baseUrl}/products`,JSON.stringify(product));
   }

   updateProduct(product: Iproduct): Observable<Iproduct> {
      const url = `${environment.baseUrl}/products/${product.id}`;
      return this.httpClient.put<Iproduct>(url, product);
    }
  
}
