import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '../material';
import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavSearchBoxComponent } from './nav-search-box/nav-search-box.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ NavBarComponent, NavSearchBoxComponent],
  exports: [ NavBarComponent, NavSearchBoxComponent]
})
export class SharedModule { }
