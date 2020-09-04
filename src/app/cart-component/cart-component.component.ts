import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent implements OnInit {
  products
  displayedColumns: string[] = ['name', 'price', 'add', 'remove'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private cartService: CartService, private productService: ProductService) { }
  
  
  ngOnInit(): void {
    this.products = this.cartService.products
  }

  addToCart(name) {
    this.cartService.addToCart(this.productService.getProductByName(name))

  }

  removeFromCart(name) {
    this.cartService.removeFromCart(this.productService.getProductByName(name))
  }

}
