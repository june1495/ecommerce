import { Component, OnInit } from '@angular/core';
import { CarouselImage } from 'src/app/interfaces';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  title: string = 'carousel';
  images: CarouselImage[] = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'VENTA DE VERANO',
      desc: 'Obtén lo mejor para el verano.',
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/7760645/pexels-photo-7760645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'VENTA DE OTOÑO',
      desc: 'Obtén lo mejor para el verano.',
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/6501792/pexels-photo-6501792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'LO MÁS POPULAR',
      desc: 'Obtén lo mejor para el verano.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
