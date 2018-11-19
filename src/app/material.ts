import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
            MatTabsModule, MatListModule, MatInputModule, MatAutocompleteModule,
            MatSelectModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
            MatTabsModule, MatListModule, MatInputModule, MatAutocompleteModule,
             MatSelectModule, MatSnackBarModule],
})
export class MaterialModule {}
