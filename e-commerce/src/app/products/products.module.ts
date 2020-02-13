import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[ProductListComponent, ProductDetailsComponent,ProductComponent]
})
export class ProductsModule { }
