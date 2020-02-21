import { Component, OnInit} from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../../core/services/product.service';
import { trigger, style, animate, transition ,query, stagger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('productsAnimation', [
      transition('*=>*', [
        query('img', style({ transform: 'translateX(-100%)' })),
        query('img',
          stagger('600ms', [
          animate('900ms', style({transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {
  
  products: IProduct[];
  product: IProduct;
  
  constructor(private productService: ProductService,
   private router:Router) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data.slice();
    })
  }
  selectProductHandler(id: number) {
    this.productService.getCurrentProduct(id).subscribe(data => {
      this.productService.selectProduct(data)
      this.product = data;
      this.router.navigate([`product/products/detail/${id}`])
    })
    
  }
  
  }


