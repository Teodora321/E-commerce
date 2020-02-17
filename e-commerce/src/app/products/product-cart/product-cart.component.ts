import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  
  get currentUser() {
    return this.userService.currentUser;
  }
  products:any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getCartItems().subscribe((data) => {
      this.products= Object.values(data)
      
    })
  }


}
