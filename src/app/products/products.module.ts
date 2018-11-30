import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material';
import {SharedModule} from 'src/app/shared/shared.module';

import {ProductsComponent } from './products/products.component';
import {ProductsRoutingModule } from './products-routing.module';
import {ProductModule} from './product/product.module';
import {LaboratoireModule } from './laboratoire/laboratoire.module';
import { FamilleModule } from './famille/famille.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ProductModule,
    LaboratoireModule,
    FamilleModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent
  ],
  exports: []
})
export class ProductsModule { }
