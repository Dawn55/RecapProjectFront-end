import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl = "https://localhost:44372/api/brands/getall"
  constructor(private httpClient:HttpClient) { }
  
  getProduct():Observable<BrandResponseModel>{
   return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
  
}
