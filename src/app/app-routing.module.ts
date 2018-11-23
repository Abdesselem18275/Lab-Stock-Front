import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from '@angular/router';


import { PageNotFoundComponent} from './page-not-found/page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products/products.component';


const appRoutes: Routes = [

  {path : '' , component : ProductsComponent},
  {path : '**' , component : PageNotFoundComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing : true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
