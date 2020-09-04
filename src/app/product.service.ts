import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [{
    "name": "apple",
    "price": 1290,
    "Description": "this is apple",
    "Tags": "tags",
    "Category": "mobile",
    "Quantity": 10,
    "Returnable": "true"
  },
  {
    "name": "samsung",
    "price": 1000,
    "Description": "this is samsung",
    "Tags": "tags",
    "Category": "mobile",
    "Quantity": 20,
    "Returnable": "true"
  },
  {
    "name": "oppo",
    "price": 1500,
    "Description": "this is oppo",
    "Tags": "tags",
    "Category": "mobile",
    "Quantity": 30,
    "Returnable": "false"
  }
  ]
  constructor() { }

  getProductByName(name) {
    return this.products.find(product => product.name === name);
  }
}
