import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product')
  product: IProduct;
    
  constructor() { }

  ngOnInit() {
  }

}
