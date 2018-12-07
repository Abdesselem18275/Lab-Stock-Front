import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from '@angular/router';


import { PageNotFoundComponent} from './page-not-found/page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products/products.component';
import { StockComponent } from './stock/stock/stock.component';
import { StockOrderComponent } from './stock-order/stock-order/stock-order.component';


const appRoutes: Routes = [

  {path : '' , component : ProductsComponent},
  {path: 'stock', component : StockComponent},
  {path: 'stock-order', component : StockOrderComponent},
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
