import { Component, OnInit } from '@angular/core';
import { Product, Laboratoire, Famille } from 'src/app/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsDataService } from '../../service/products-data.service';
import { MatSnackBar } from '@angular/material';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {

  product: Product ;
  laboraoire: Laboratoire ;
  familles: Famille[];
  laboratoires: Laboratoire[];
  productForm: FormGroup;
  server_error: any;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router ) {
      this.productForm = this.fb.group({
        designation : ['', Validators.required],
        reference : ['', Validators.required],
        laboratoire : ['', Validators.required],
        famille : ['', Validators.required],
        conditionnement : this.fb.group({
        contenantCoffret : ['', Validators.required],
        testContenant : ['', Validators.required]}),
        stock : this.fb.group({
        cmm : ['', Validators.required],
        stockMiniMois : ['', Validators.required]})
      });
    this.server_error = {};
  }

  ngOnInit() {
    this.service.get_elements('famille').subscribe( (familles: Famille[]) => this.familles = familles);
    this.service.get_elements('laboratoire').subscribe( (laboratoires: Laboratoire[]) => this.laboratoires = laboratoires);

    const element_save: HTMLElement = document.getElementById('save_ico') as HTMLElement ;
    console.warn(element_save);
    fromEvent(element_save, 'click').pipe(debounceTime(500)).subscribe(
      () =>  {   const element_submit: HTMLElement = document.getElementById('submit-button') as HTMLElement ;
                       element_submit.click(); });
  }

  onSubmit() {

    const element: HTMLElement = document.getElementById('submit-button') as HTMLElement ;
    element.click();
    this.product = Product.fromFrom(this.productForm, 0);
    this.service.add_element(JSON.stringify(this.product), 'product').
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
