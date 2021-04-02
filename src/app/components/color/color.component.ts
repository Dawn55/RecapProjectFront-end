import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
dataLoaded = false;
  colors:Color[]= [];
  currentcolor:Color;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColor();
  }

  getColor(){
    this.colorService.getColor().subscribe(response=>{
      this.colors = response.data
      this.dataLoaded = true;
    })
  }
  setCurrentColor(color:Color){
    this.currentcolor= color
  }
  getColorClass(color:Color){
    if(this.currentcolor == color){
       return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getAllColorClass(){
    if(!this.currentcolor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }

  }

}
