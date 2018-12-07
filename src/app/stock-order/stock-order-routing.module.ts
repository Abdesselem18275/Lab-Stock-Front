import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockOrderListComponent } from './stock-order-list/stock-order-list.component';
import { StockOrderComponent } from './stock-order/stock-order.component';
import { StockOrderDetailComponent } from './stock-order-detail/stock-order-detail.component';
import { StockOrderNewComponent } from './stock-order-new/stock-order-new.component';

const stockOrderRoutes: Routes = [
  { path : 'stock-order',
    component : StockOrderComponent,
    children : [
      {
      path: 'list',
      component : StockOrderListComponent
      },
      {
       path: 'new',
       component : StockOrderNewComponent
     },
     {
       path: ':id',
       component : StockOrderDetailComponent
     },
    ]

  }







];

@NgModule({
  imports: [RouterModule.forChild(stockOrderRoutes)],
  exports: [RouterModule]
})
export class StockOrderRoutingModule { }
