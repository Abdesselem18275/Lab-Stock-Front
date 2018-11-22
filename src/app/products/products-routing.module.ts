import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LaboratoireComponent } from './laboratoire/laboratoire/laboratoire.component';


const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
          {
            path: '',
            redirectTo: '/products/product/list' , pathMatch: 'full',
          },
          {
            path: 'famille',
            redirectTo: '/products/famille/list' , pathMatch: 'full',
          },
          {
            path: 'laboratoire',
            component: LaboratoireComponent,
          }
        ]
      },
    ];


@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
