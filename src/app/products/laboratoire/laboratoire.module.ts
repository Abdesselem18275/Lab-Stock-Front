import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../../material';
import {SharedModule} from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LaboratoireRoutingModule } from './laboratoire-routing.module';
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { LaboratoireDetailComponent } from './laboratoire-detail/laboratoire-detail.component';
import { LaboratoireHomeComponent } from './laboratoire-home/laboratoire-home.component';
import { LaboratoireListComponent } from './laboratoire-list/laboratoire-list.component';
import { LaboratoireNewComponent } from './laboratoire-new/laboratoire-new.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    LaboratoireRoutingModule,

  ],
  declarations: [LaboratoireComponent, LaboratoireDetailComponent, LaboratoireHomeComponent,
    LaboratoireListComponent, LaboratoireNewComponent],
  exports : [LaboratoireComponent]
})
export class LaboratoireModule { }
