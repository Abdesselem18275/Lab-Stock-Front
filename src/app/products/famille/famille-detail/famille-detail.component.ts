import { Component, OnInit } from '@angular/core';
import { switchMap, debounceTime} from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {Famille} from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { fromEvent } from 'rxjs';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-famille-detail',
  templateUrl: './famille-detail.component.html',
  styleUrls: ['./famille-detail.component.scss']
})
export class FamilleDetailComponent implements OnInit {
  server_error: any;
  famille: Famille ;
  familleForm: FormGroup;
  isComplete: boolean;
  mode: string;

  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
    private datepipe: DatePipe) {

      this.familleForm = this.fb.group({
        designation : ['', Validators.required]
      });
      this.server_error = {}; }

  ngOnInit() {
    this.isComplete = false;
    this.mode = 'indeterminate';
    this.route.paramMap.pipe(
         switchMap((params: ParamMap) => this.service.get_element(params.get('id'), 'famille'))).
         subscribe((jsonItem: any) => {
                    this.famille = Famille.fromJson(jsonItem);
                    this._updateFrom(this.famille);
                    this.isComplete = true;
                    this.mode = 'determinate'; } );

    const element_save: HTMLElement = document.getElementById('save_ico') as HTMLElement ;
    console.warn(element_save);
    fromEvent(element_save, 'click').pipe(debounceTime(500)).subscribe(
      () =>  {   const element_submit: HTMLElement = document.getElementById('submit-button') as HTMLElement ;
                       element_submit.click(); });

    const element_delete: HTMLElement = document.getElementById('delete_ico') as HTMLElement ;
    fromEvent(element_delete, 'click').pipe(debounceTime(500)).subscribe(
      () => this.service.delete_element(this.famille.id, 'famille').
                           subscribe(() => { this.snackBar.open('Element supprimer', '' , {duration: 1000, });
                                             this.router.navigate(['../list'], { relativeTo: this.route });
                                              })
                                              );
}




  private _updateFrom (famille: Famille) {
    this.familleForm.patchValue({
      designation : famille.designation,
    }); }

  onSubmit() {

    this.famille.designation = this.familleForm.value.designation  ;
    this.famille.modification_date = this.datepipe.transform(new Date(), 'yyyy-MM-ddThh:mm');

    this.service.update_element(this.famille.id, JSON.stringify(this.famille), 'famille').
          subscribe(
            (famille: Famille) =>  {
              this.famille = Famille.fromJson(famille);
              this.snackBar.open('Element ajouter', '' , {duration: 1000, }); },
            error => {
              this.server_error = error.error ; this.snackBar.open('Erreur');
              console.warn(this.server_error); }
          ); }
}
