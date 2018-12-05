import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '../material';
import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavSearchBoxComponent } from './nav-search-box/nav-search-box.component';
import { LabMenuComponent } from './lab-menu/lab-menu.component';
import { LogInfoComponent } from './log-info/log-info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ NavBarComponent, NavSearchBoxComponent, LabMenuComponent, LogInfoComponent],
  exports: [ NavBarComponent, NavSearchBoxComponent, LabMenuComponent , LogInfoComponent]
})
export class SharedModule { }
