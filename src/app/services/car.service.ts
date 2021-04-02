import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44372/api/cars/';
  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<CarResponseModel> {
    let newpath = this.apiUrl + "getallwithcardetails"
    return this.httpClient.get<CarResponseModel>(newpath);
  }
  getCarsByBrand(id:number):Observable<ListResponseModel<Car>>{
    let newpath = this.apiUrl + "getallbybrandidwithdetails?id="+id
    return this.httpClient.get<ListResponseModel<Car>>(newpath);
  }
  getCarsByColor(id:number):Observable<ListResponseModel<Car>>{
    let newpath = this.apiUrl + "getallbycoloridwithdetails?id="+id
    return this.httpClient.get<ListResponseModel<Car>>(newpath);
  }
  getCarsById(id:number):Observable<ListResponseModel<Car>>{
    let newpath = this.apiUrl + "getbyidwithdetails?id="+id
    return this.httpClient.get<ListResponseModel<Car>>(newpath);
  }
}
