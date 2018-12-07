import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockOrderRoutingModule } from './stock-order-routing.module';
import { StockOrderComponent } from './stock-order/stock-order.component';
import { StockOrderListComponent } from './stock-order-list/stock-order-list.component';
import { StockOrderDetailComponent } from './stock-order-detail/stock-order-detail.component';
import { StockOrderNewComponent } from './stock-order-new/stock-order-new.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule ,
    StockOrderRoutingModule
  ],
  declarations: [StockOrderComponent, StockOrderListComponent, StockOrderDetailComponent, StockOrderNewComponent]
})
export class StockOrderModule { }
