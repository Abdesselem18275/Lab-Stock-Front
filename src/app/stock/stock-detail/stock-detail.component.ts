import { Component, OnInit } from '@angular/core';
import { TransProduct, Product } from 'src/app/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductsDataService } from 'src/app/products/service/products-data.service';
import { MatSnackBar } from '@angular/material';
import { switchMap, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {

  transProduct: TransProduct ;
  server_error: any;
  product: Product ;
  products: Product[];
  transProductForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
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
    this.route.paramMap.pipe(
         switchMap((params: ParamMap) => this.service.get_element(params.get('id'), 'transaction'))).
         subscribe((jsonItem: any) => {
                    this.transProduct = TransProduct.fromJson(jsonItem);
                    this._updateFrom(this.transProduct); } );

    const element_save: HTMLElement = document.getElementById('save_ico') as HTMLElement ;
    fromEvent(element_save, 'click').pipe(debounceTime(500)).subscribe(
      () =>  {   const element_submit: HTMLElement = document.getElementById('submit-button') as HTMLElement ;
                       element_submit.click(); });

    const element_delete: HTMLElement = document.getElementById('delete_ico') as HTMLElement ;
    fromEvent(element_delete, 'click').pipe(debounceTime(500)).subscribe(
      () => this.service.delete_element(this.transProduct.id, 'transaction').
                           subscribe(() => { this.snackBar.open('Element supprimer', '' , {duration: 1000, });
                                             this.router.navigate(['../list'], { relativeTo: this.route });
                                              })
                                              );

    }




  private _updateFrom (transProduct: TransProduct) {
    this.transProductForm.patchValue({
      product : transProduct.product !== null ? transProduct.product.id : '',
      trans_type : transProduct.trans_type,
      code_lot : transProduct.code_lot,
      quantite : transProduct.quantite,
      peremption_date : transProduct.peremption_date
    }); }

  onSubmit() {
    this.transProduct = TransProduct.fromForm(this.transProductForm, this.transProduct.id);

    this.transProduct.modification_date = this.datepipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.transProduct.creation_date = this.datepipe.transform(Date.parse(this.transProduct.creation_date), 'yyyy-MM-dd');
    this.transProduct.peremption_date = this.datepipe.transform(Date.parse(this.transProduct.peremption_date), 'yyyy-MM-dd');

    this.service.update_element(this.transProduct.id, JSON.stringify(this.transProduct), 'transaction').
          subscribe((transProduct: TransProduct) =>  {
              this.transProduct = TransProduct.fromJson(transProduct);
              this.snackBar.open('Element ajouter', '' , {duration: 1000, }); },
              error => {this.server_error = error.error ; this.snackBar.open('Erreur');  console.warn(this.server_error); }
          ); }

}
