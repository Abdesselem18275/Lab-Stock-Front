import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';

import { AppComponent } from './app.component';
import { ProductNavbarComponent } from './product/product-navbar/product-navbar.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { LabListComponent } from './laboratoire/lab-list/lab-list/lab-list.component';
import {ProductSearchInjectables} from './product/service/product-search-injectables.service';
import { PageNotFoundComponent} from './page-not-found/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path : 'product-list' , component : ProductListComponent},
  {path : 'product/:id' , component : ProductDetailComponent},
  {path : 'lab-list' , component : LabListComponent},
  {path : '' , redirectTo: '/product-list' , pathMatch: 'full'},
  {path : '**' , component : PageNotFoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductNavbarComponent,
    ProductSearchComponent,
    PageNotFoundComponent,
    LabListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing : true}),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ProductSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
