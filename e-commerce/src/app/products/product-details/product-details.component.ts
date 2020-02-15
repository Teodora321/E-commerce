import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //product: IProduct;

  get selectedProduct() { return this.productService.selectedProduct }

  constructor(private productService: ProductService) { }
  ngOnInit() {
  }

}
