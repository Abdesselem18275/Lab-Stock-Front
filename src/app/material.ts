import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';





@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatTabsModule,MatListModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatTabsModule,MatListModule],
})
export class MaterialModule { }