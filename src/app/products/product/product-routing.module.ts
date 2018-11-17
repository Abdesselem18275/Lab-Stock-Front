import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNewComponent } from './product-new/product-new.component';

const productRoutes: Routes = [
  {
    path: 'products/product',
    component: ProductComponent,
    children: [{
            path: 'list',
            component: ProductHomeComponent,
               },
               {
                path : 'new',
                component : ProductNewComponent
                },
            {
              path: ':id',
              component: ProductDetailComponent
            },
          ]
  }];


@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
