import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '../material';
import { SharedRoutingModule } from './shared-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [SearchBoxComponent, NavBarComponent],
  exports: [SearchBoxComponent, NavBarComponent]
})
export class SharedModule { }
