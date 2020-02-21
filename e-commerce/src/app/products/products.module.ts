import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductCartComponent } from './product-cart/product-cart.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductCartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  
  exports:[ProductListComponent, ProductDetailsComponent,ProductCartComponent]
})
export class ProductsModule { }
