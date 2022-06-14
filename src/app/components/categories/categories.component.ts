import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/6501792/pexels-photo-6501792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Polos y Camisas',
      cat: 'polos',
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Pantalones',
      cat: 'jeans',
    },
    {
      id: 3,
      img: 'https://www.runningcorrer.com.ar/wprunning/wp-content/uploads/2016/03/Zapatillas-Nike-atan-solas-negras.jpg',
      title: 'Zapatillas',
      cat: 'zapatillas',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
