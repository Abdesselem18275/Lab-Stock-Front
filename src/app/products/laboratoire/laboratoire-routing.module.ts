import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const laboratoiresRoutes: Routes = [
  ];

@NgModule({
  imports: [RouterModule.forChild(laboratoiresRoutes)],
  exports: [RouterModule]
})
export class LaboratoireRoutingModule { }
