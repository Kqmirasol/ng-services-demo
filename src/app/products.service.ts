import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getproducts(){
    return[{
      id: "P-101",
      productname: 'Logitech Mouse',
      description: '6 button Mechanical Mouse',
      prices: 899
    },
    {
      id: "P-102",
      productname: 'JBL BT Speaker',
      description: 'Waterproof Radio 360 Surround',
      prices: 1099
    },
    {
      id: "P-103",
      productname: 'Mechanical Keyboard',
      description: 'Hot-swappable RGB Backlit',
      prices: 2395
    },
    {
      id: "P-104",
      productname: 'Oculus Meta',
      description: 'All-in-one Gaming Headset',
      prices: 22450
    },
    {
      id: "P-105",
      productname: 'Karlo Mirasol',
      description: 'Pogi',
      prices: 999999999
    }]
  }
}
