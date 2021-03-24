import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl= 'https://localhost:44304/api/';
  constructor(private httpClient:HttpClient) { }


  getImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newpath =this.apiUrl + "carImages/getallbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newpath)
  };
  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newpath=this.apiUrl+"carImages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newpath)
  }
}
