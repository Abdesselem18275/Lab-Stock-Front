import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';

import { AppComponent } from './app.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found/page-not-found.component';
import { ProductsDataInjectables} from './products/service/products-data-injectables.service';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SharedInjectablesService } from './shared/service/shared-injectables.service';
import { StockModule } from './stock/stock.module';
import { DatePipe } from '@angular/common';
import { StockOrderModule } from './stock-order/stock-order.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductsModule,
    StockModule,
    StockOrderModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [ProductsDataInjectables, SharedInjectablesService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
