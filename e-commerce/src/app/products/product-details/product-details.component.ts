import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { UserService } from 'src/app/core/services/user.service';
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
    private notificationService: NotificationService) { }
  ngOnInit() {
  }
  add() {
    this.userService.addToCart(this.selectedProduct).subscribe(() => {
      // this.notificationService.success("Added to the cart!")
      
    })
    //this.userService.editUser(id, data)
  }

}
