import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoriesService {

  constructor(private httpClient:HttpClient) {

  }

  getAllCategories():Observable<ICategory[]>
  {
         return this.httpClient.get<ICategory[]>(`${environment.baseUrl}/category`);
  }
}
