import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  product
  name
  constructor(private activatedRoute: ActivatedRoute,
    private service: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      console.log(param)
      const name = param['product']
      console.log(name)
      this.product = this.service.getProductByName(name)
    })
  }

  addToCart(product) {
    this.cartService.addToCart(product)
  }



}
