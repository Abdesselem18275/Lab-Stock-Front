import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '../material';
import { SharedRoutingModule } from './shared-routing.module';
import { AutocompleteFieldComponent } from './autocomplete-field/autocomplete-field.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [AutocompleteFieldComponent],
  exports: [AutocompleteFieldComponent]
})
export class SharedModule { }
