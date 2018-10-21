import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material';
import { AppRoutingModule } from '../app-routing.module';





import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    ProductNavbarComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductSearchComponent
  ],
  exports: [ProductNavbarComponent]
})
export class ProductsModule { }
