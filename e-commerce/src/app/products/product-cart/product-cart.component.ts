import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {


  get currentUser() {
    return this.userService.currentUser;
  }

  products: any;
  total: number; 

  constructor(private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getCartItems().subscribe((data) => {
      this.products = Object.values(data);
      this.total = this.products
        .map(item => item.price)
        .reduce((a, b) => a + b, 0)
    })
  }
  deleteCart() {
    this.userService.deleteCartItems(this.products).subscribe(() => {
    })
  }




}
