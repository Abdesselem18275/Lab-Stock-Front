import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material';
import { ReactiveFormsModule } from '@angular/forms';


import { ProductsComponent } from './products/products.component';
import {ProductsRoutingModule } from './products-routing.module';
import {ProductModule} from './product/product.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    ProductModule,
  ],
  declarations: [
    ProductsComponent
  ],
  exports: []
})
export class ProductsModule { }
