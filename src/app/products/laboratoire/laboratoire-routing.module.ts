import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { LaboratoireHomeComponent } from './laboratoire-home/laboratoire-home.component';
import { LaboratoireDetailComponent } from './laboratoire-detail/laboratoire-detail.component';
import { LaboratoireNewComponent } from './laboratoire-new/laboratoire-new.component';

const laboratoiresRoutes: Routes = [
  {
    path: 'products/laboratoire',
    component: LaboratoireComponent,
    children: [{
            path: 'list',
            component: LaboratoireHomeComponent,
               },
               {
                path : 'new',
                component : LaboratoireNewComponent
                },
            {
              path: ':id',
              component: LaboratoireDetailComponent
            },
          ]
  }];

@NgModule({
  imports: [RouterModule.forChild(laboratoiresRoutes)],
  exports: [RouterModule]
})
export class LaboratoireRoutingModule { }
