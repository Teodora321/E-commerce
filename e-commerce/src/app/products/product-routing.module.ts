import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import {AuthGuard} from '../../app/core/guards/auth.guard'

const routes: Routes = [
    {
        path: 'product',
        children: [
            {
                path: 'products',
                pathMatch: 'full',
                component: ProductListComponent
            },
            {
                path: 'products/detail/:id',
                component: ProductDetailsComponent,
            },
            {
                path: 'cart',
                pathMatch:'full',
                component: ProductCartComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true
                }
            },
        ]
    },
];
export const ProductRoutingModule = RouterModule.forChild(routes);