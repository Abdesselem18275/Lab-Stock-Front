import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockNewComponent } from './stock-new/stock-new.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';

const stockRoutes: Routes = [
   { path : 'stock',
     component : StockComponent,
     children : [
       {
       path: 'list',
       component : StockListComponent
       },
       {
        path: 'new',
        component : StockNewComponent
      },
      {
        path: ':id',
        component : StockDetailComponent
      },
     ]

   }
];

@NgModule({
  imports: [RouterModule.forChild(stockRoutes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
