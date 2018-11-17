import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from '@angular/router';


import { PageNotFoundComponent} from './page-not-found/page-not-found/page-not-found.component';


const appRoutes: Routes = [

  {path : '' , redirectTo: '/products/product/list' , pathMatch: 'full'},
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
