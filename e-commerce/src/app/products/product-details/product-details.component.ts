import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  get selectedProduct() { return this.productService.selectedProduct }

  constructor(private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService
   
    ) { }
  ngOnInit() {
  }
  addToCart() {
    this.userService.isLogged ? 
      this.userService.addToCart(this.selectedProduct).subscribe(() => {      
        this.notificationService.success('Added to the cart!')
    }) : this.router.navigate(['/login'])
  }

}
