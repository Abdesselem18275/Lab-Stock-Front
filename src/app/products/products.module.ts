import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material';


import {ProductsComponent } from './products/products.component';
import {ProductsRoutingModule } from './products-routing.module';
import {ProductModule} from './product/product.module';
import {LaboratoireModule } from './laboratoire/laboratoire.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductsRoutingModule,
    ProductModule,
    LaboratoireModule
  ],
  declarations: [
    ProductsComponent
  ],
  exports: []
})
export class ProductsModule { }
