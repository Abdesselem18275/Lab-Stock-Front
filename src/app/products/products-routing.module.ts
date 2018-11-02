import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product/product.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';


const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
          {
            path: '',
            redirectTo: '/products/product/list' , pathMatch: 'full',
          },
        ]
      },
    ];


@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
