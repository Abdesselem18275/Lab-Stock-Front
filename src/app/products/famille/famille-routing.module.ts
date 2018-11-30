import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const famillesRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(famillesRoutes)],
  exports: [RouterModule]
})
export class FamilleRoutingModule { }
