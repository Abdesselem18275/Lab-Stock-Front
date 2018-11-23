import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilleComponent } from './famille/famille.component';
import { FamilleHomeComponent } from './famille-home/famille-home.component';
import { FamilleNewComponent } from './famille-new/famille-new.component';
import { FamilleDetailComponent } from './famille-detail/famille-detail.component';

const famillesRoutes: Routes = [
  {
    path: 'products/famille',
    component: FamilleComponent,
    children: [{
            path: 'list',
            component: FamilleHomeComponent,
               },
               {
                path : 'new',
                component : FamilleNewComponent
                },
            {
              path: ':id',
              component: FamilleDetailComponent
            },
          ]
  }];

@NgModule({
  imports: [RouterModule.forChild(famillesRoutes)],
  exports: [RouterModule]
})
export class FamilleRoutingModule { }
