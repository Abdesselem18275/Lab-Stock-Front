import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';


import {MaterialModule} from '../material';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock/stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockNewComponent } from './stock-new/stock-new.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule ,
    StockRoutingModule
  ],
  declarations: [StockComponent, StockListComponent, StockDetailComponent, StockNewComponent],
  providers: [DatePipe]
})
export class StockModule { }
