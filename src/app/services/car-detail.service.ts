import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ObjectResponseModel } from '../models/objectResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl= 'https://localhost:44304/api/';
  constructor(private httpClient:HttpClient) { }


  getCarDetailByCarId(carId:number):Observable<ObjectResponseModel<CarDetail>>{
    let newpath =this.apiUrl + "cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ObjectResponseModel<CarDetail>>(newpath)
 }

}
