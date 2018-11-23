import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilleRoutingModule } from './famille-routing.module';
import { FamilleComponent } from './famille/famille.component';
import { FamilleDetailComponent } from './famille-detail/famille-detail.component';
import { FamilleHomeComponent } from './famille-home/famille-home.component';
import { FamilleListComponent } from './famille-list/famille-list.component';
import { FamilleNewComponent } from './famille-new/famille-new.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FamilleRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [FamilleComponent, FamilleDetailComponent, FamilleHomeComponent, FamilleListComponent, FamilleNewComponent],
  exports: [FamilleComponent]
})
export class FamilleModule { }
