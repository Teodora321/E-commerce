import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit,OnDestroy {

  products: any;
  total: number; 
  subscription: Subscription

  get currentUser() {
    return this.userService.currentUser;
  }

  constructor(private readonly userService: UserService,
  private  readonly notificationService:NotificationService) { }

  ngOnInit() :void{
     this.subscription= this.userService.getCartItems().subscribe((data) => {
      this.products = Object.values(data);
      this.total = this.products
        .map(item => item.price)
        .reduce((a, b) => a + b, 0)
    })
  }
  deleteCart() :void{
    this.userService.deleteCartItems(this.products).subscribe(() => {
      this.notificationService.success('Order successful!')
    }, ()=> this.notificationService.error('Something went wrong! Try again!'))
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe()
  }

  




}
