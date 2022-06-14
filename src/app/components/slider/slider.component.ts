import { Component, Input, OnInit } from '@angular/core';
import { CarouselImage } from 'src/app/interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
  @Input() indicators: boolean = true;
  selectedIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
