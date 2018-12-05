import { Component, OnInit } from '@angular/core';
import { switchMap, debounceTime} from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {Laboratoire} from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { fromEvent } from 'rxjs';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-laboratoire-detail',
  templateUrl: './laboratoire-detail.component.html',
  styleUrls: ['./laboratoire-detail.component.scss']
})
export class LaboratoireDetailComponent implements OnInit {
  server_error: any;
  laboratoire: Laboratoire ;
  laboratoireForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
    private datepipe: DatePipe) {

      this.laboratoireForm = this.fb.group({
        designation : ['', Validators.required]
      });
      this.server_error = {}; }

  ngOnInit() {
    this.route.paramMap.pipe(
         switchMap((params: ParamMap) => this.service.get_element(params.get('id'), 'laboratoire'))).
         subscribe((jsonItem: any) => {
                    this.laboratoire = Laboratoire.fromJson(jsonItem);
                    this._updateFrom(this.laboratoire); } );

    const element_save: HTMLElement = document.getElementById('save_ico') as HTMLElement ;
    console.warn(element_save);
    fromEvent(element_save, 'click').pipe(debounceTime(500)).subscribe(
      () =>  {   const element_submit: HTMLElement = document.getElementById('laboratoire-submit-button') as HTMLElement ;
                       element_submit.click(); });

    const element_delete: HTMLElement = document.getElementById('delete_ico') as HTMLElement ;
    fromEvent(element_delete, 'click').pipe(debounceTime(500)).subscribe(
      () => this.service.delete_element(this.laboratoire.id, 'laboratoire').
                           subscribe(() => { this.snackBar.open('Element supprimer', '' , {duration: 1000, });
                                             this.router.navigate(['../list'], { relativeTo: this.route });
                                              })
                                              );

    }




  private _updateFrom (laboratoire: Laboratoire) {
    this.laboratoireForm.patchValue({
      designation : laboratoire.designation,
    }); }

  onSubmit() {
    this.laboratoire.designation = this.laboratoireForm.value.designation ;
    this.laboratoire.modification_date = this.datepipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.service.update_element(this.laboratoire.id, JSON.stringify(this.laboratoire), 'laboratoire').
          subscribe(
            (laboratoire: Laboratoire) =>  {
              this.laboratoire = Laboratoire.fromJson(laboratoire);
              this.snackBar.open('Element ajouter', '' , {duration: 1000, }); },
            error => {
              this.server_error = error.error ; this.snackBar.open('Erreur');
              console.warn(this.server_error); }
          ); }
}
