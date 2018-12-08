import { Component, OnInit } from '@angular/core';
import { Famille } from 'src/app/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsDataService } from '../../service/products-data.service';
import { MatSnackBar } from '@angular/material';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-famille-new',
  templateUrl: './famille-new.component.html',
  styleUrls: ['./famille-new.component.scss']
})
export class FamilleNewComponent implements OnInit {

  famille: Famille ;
  familleForm: FormGroup;
  server_error: any;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
    private datepipe: DatePipe ) {
      this.familleForm = this.fb.group({
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
    this.famille = new Famille({designation: this.familleForm.value.designation});
    this.famille.creation_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.famille.modification_date = this.datepipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.service.add_element(JSON.stringify(this.famille), 'famille').
    subscribe(
     () =>  {
        this.snackBar.open('Element ajouter', '' , {duration: 1000, });
        this.router.navigate(['../list'], { relativeTo: this.route } ); },
      error => {
        this.server_error = error ; this.snackBar.open('Erreur');
        Object.keys(this.server_error).forEach(key => {
        this.familleForm.controls[key].setErrors(this.server_error[key]); });
        console.warn(this.server_error); }
    );
  }

}
