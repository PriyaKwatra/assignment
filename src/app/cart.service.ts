import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  products = new Array();
  constructor() { }
  
  addToCart(product){
  this.products.push(product)
  }

  removeFromCart(product){
    // this.products.findIndex(p=>p.name==product.name)
   }

}

