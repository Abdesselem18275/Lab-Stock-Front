import { Component, OnInit } from '@angular/core';
import { Laboratoire } from 'src/app/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsDataService } from '../../service/products-data.service';
import { MatSnackBar } from '@angular/material';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-laboratoire-new',
  templateUrl: './laboratoire-new.component.html',
  styleUrls: ['./laboratoire-new.component.scss']
})
export class LaboratoireNewComponent implements OnInit {

  laboratoire: Laboratoire ;
  laboratoireForm: FormGroup;
  server_error: any;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router ,
    private datepipe: DatePipe ) {
      this.laboratoireForm = this.fb.group({
        designation : ['', Validators.required]
      });
    this.server_error = {};
  }

  ngOnInit() {

    const element_save: HTMLElement = document.getElementById('save_ico') as HTMLElement ;
    fromEvent(element_save, 'click').pipe(debounceTime(500)).subscribe(
      () =>  {   const element_submit: HTMLElement = document.getElementById('submit-button') as HTMLElement ;
                       element_submit.click(); });

  }

  onSubmit() {

    this.laboratoire = new Laboratoire({designation: this.laboratoireForm.value.designation});
    this.laboratoire.creation_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.laboratoire.modification_date = this.datepipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.service.add_element(JSON.stringify(this.laboratoire), 'laboratoire').
    subscribe(
     () =>  {
        this.snackBar.open('Element ajouter', '' , {duration: 1000, });
        this.router.navigate(['../list'], { relativeTo: this.route } ); },
      error => {
        this.server_error = error ; this.snackBar.open('Erreur');
        console.warn(this.server_error); }
    );
  }

}
