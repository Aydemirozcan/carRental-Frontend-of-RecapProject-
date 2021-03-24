import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { ObjectResponseModel } from 'src/app/models/objectResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetail:CarDetail;
  cardetails:CarDetail[]=[];
   dataLoaded=false;

  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute,private carImageService:CarImageService) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
     if(params["carId"]){
       this.getCarDetailsByCarId(params["carId"])
     }
   
    })
  }
     getCarDetailsByCarId(carId:number){
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response)=>{
    this.carDetail=response.data;
  })
}
  
}
