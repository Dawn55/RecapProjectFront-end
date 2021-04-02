import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  basePath:string = "https://localhost:44372"
  constructor(
    private carService: CarService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrand(params['id']);
      }
      if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
       else {
        this.getCars();
      }

    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColor(id:number){
    this.carService.getCarsByColor(id).subscribe(response =>{
      this.cars = response.data;
    })
  }

}
