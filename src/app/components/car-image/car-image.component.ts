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

  constructor(
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private carDetailService: CarDetailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getImagesByCar(params['carId']);
        this.getCarDetail(params['carId']);
      } else {
      }
    });
  }

  getImagesByCar(carId: number) {
    this.carImageService.getImagesByCar(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getCarDetail(carId: number) {
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response) => {
      this.cardetail = response.data;
    });
  }

  setCurrentCarImage(carImage: CarImage) {
    this.currentCarImage = carImage;
  }
}
