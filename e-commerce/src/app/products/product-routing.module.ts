import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent} from '../components/not-found/not-found.component'

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
    
        ]
    },


];

export const ProductRoutingModule = RouterModule.forChild(routes);