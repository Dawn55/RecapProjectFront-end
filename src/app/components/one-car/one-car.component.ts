import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-one-car',
  templateUrl: './one-car.component.html',
  styleUrls: ['./one-car.component.css'],
})
export class OneCarComponent implements OnInit {
  cars: Car[];
  basePath:string = "https://localhost:44372"
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarsById(params['carId']);
    });
  }
  getCarsById(id: number) {
    this.carService.getCarsById(id).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
