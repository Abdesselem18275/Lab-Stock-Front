import { Component, OnInit } from '@angular/core';
import { TransProduct, Product } from 'src/app/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductsDataService } from 'src/app/products/service/products-data.service';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import { switchMap, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-stock-new',
  templateUrl: './stock-new.component.html',
  styleUrls: ['./stock-new.component.scss']
})
export class StockNewComponent implements OnInit {

  transProduct: TransProduct ;
  server_error: any;
  product: Product ;
  products: Product[];
  transProductForm: FormGroup;


  constructor(
    private service: ProductsDataService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    public datepipe: DatePipe) {

      this.transProductForm = this.fb.group({
        product : ['', Validators.required],
        trans_type : ['', Validators.required],
        code_lot : ['', Validators.required],
        quantite : ['', Validators.required],
        peremption_date : ['', Validators.required],
      });
      this.server_error = {};
  }

  ngOnInit() {
    this.service.get_elements('product').subscribe((products: Product[]) => this.products = products);
    const element_save: HTMLElement = document.getElementById('save_ico') as HTMLElement ;
    fromEvent(element_save, 'click').pipe(debounceTime(500)).subscribe(
      () =>  {   const element_submit: HTMLElement = document.getElementById('submit-button') as HTMLElement ;
                       element_submit.click(); });


    }


  onSubmit() {
    this.transProduct = TransProduct.fromForm(this.transProductForm, 0);

    this.transProduct.modification_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.transProduct.creation_date = this.datepipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.transProduct.peremption_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    this.service.add_element(JSON.stringify(this.transProduct), 'transaction').
          subscribe((transProduct: TransProduct) =>  {
              this.transProduct = TransProduct.fromJson(transProduct);
              this.snackBar.open('Element ajouter', '' , {duration: 1000, }); },
              error => {this.server_error = error.error ; this.snackBar.open('Erreur');  console.warn(this.server_error); }
          ); }

}
