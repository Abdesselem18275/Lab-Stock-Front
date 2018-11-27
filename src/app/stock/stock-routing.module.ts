import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { StockListComponent } from './stock-list/stock-list.component';

const stockRoutes: Routes = [
   { path : 'stock',
     component : StockComponent,
     children : [
       {
       path: 'list',
       component : StockListComponent
       }
     ]

   }







];

@NgModule({
  imports: [RouterModule.forChild(stockRoutes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
