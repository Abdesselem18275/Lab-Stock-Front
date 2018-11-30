import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LaboratoireComponent } from './laboratoire/laboratoire/laboratoire.component';
import { FamilleComponent } from './famille/famille/famille.component';
import { ProductComponent } from './product/product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { FamilleListComponent } from './famille/famille-list/famille-list.component';
import { FamilleNewComponent } from './famille/famille-new/famille-new.component';
import { FamilleDetailComponent } from './famille/famille-detail/famille-detail.component';
import { LaboratoireListComponent } from './laboratoire/laboratoire-list/laboratoire-list.component';
import { LaboratoireNewComponent } from './laboratoire/laboratoire-new/laboratoire-new.component';
import { LaboratoireDetailComponent } from './laboratoire/laboratoire-detail/laboratoire-detail.component';


const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
          {
            path: 'product',
            component: ProductComponent,
            children : [
              {
              path: 'list',
              component : ProductListComponent
              },
              {
                path: 'new',
                component : ProductNewComponent
              },
              {
                path: ':id',
                component : ProductDetailComponent
              },
            ]
          },
          {
            path: 'famille',
            component: FamilleComponent,
            children : [
              {
              path: 'list',
              component : FamilleListComponent
              },
              {
                path: 'new',
                component : FamilleNewComponent
              },
              {
                path: ':id',
                component : FamilleDetailComponent
              },
            ]
          },
          {
            path: 'laboratoire',
            component: LaboratoireComponent,
            children : [
              {
              path: 'list',
              component : LaboratoireListComponent
              },
              {
                path: 'new',
                component : LaboratoireNewComponent
              },
              {
                path: ':id',
                component : LaboratoireDetailComponent
              },
            ]
          }
        ]
      },
    ];


@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
