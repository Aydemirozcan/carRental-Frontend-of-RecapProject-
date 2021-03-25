import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
  cardetail: CarDetail;
  currentCarImage: CarImage;
  defaultImage:string = "/images/default.jpg"

  constructor(
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private carDetailService: CarDetailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
     
 
      if (params['carId']) {
        this.getCarDetail(params['carId']);
      } else {
      }
    });
  }


getCarDetail(carId: number) {
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response) => {
      this.cardetail = response.data;
      console.log(this.cardetail);
    });
  }

 setCurrentCarImage(carImage: CarImage) {
    this.currentCarImage = carImage;
  }
}
