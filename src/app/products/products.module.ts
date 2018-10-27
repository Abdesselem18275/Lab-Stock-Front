import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductHeaderComponent } from './product-header/product-header.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    ProductSearchComponent,
    ProductNavbarComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductHeaderComponent
  ],
  exports: [ProductHeaderComponent]
})
export class ProductsModule { }
