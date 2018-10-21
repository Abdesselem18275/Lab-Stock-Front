import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from '@angular/router';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LabListComponent } from './laboratoire/lab-list/lab-list/lab-list.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {path : 'product-list' , component : ProductListComponent},
  {path : 'product/:id' , component : ProductDetailComponent},
  {path : 'lab-list' , component : LabListComponent},
  {path : '' , redirectTo: '/product-list' , pathMatch: 'full'},
  {path : '**' , component : PageNotFoundComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing : true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
