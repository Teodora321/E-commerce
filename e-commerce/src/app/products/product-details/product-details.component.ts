import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  get selectedProduct() { return this.productService.selectedProduct }

  constructor(private productService: ProductService,
    private userService: UserService,
    private router:Router
   
    ) { }
  ngOnInit() {
  }
  addToCart() {
    this.userService.isLogged ? 
      this.userService.addToCart(this.selectedProduct).subscribe(() => {      
    }) : this.router.navigate(['/login'])
  }

}
