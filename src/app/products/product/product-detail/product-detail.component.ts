import { Component, OnInit } from '@angular/core';
import { map, switchMap, startWith } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, observable } from 'rxjs';
import { Product , Famille } from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  productForm: FormGroup;
  familleOptions: string[]  = ['One', 'Two', 'Three'];
  laboratoireOptions: string[] = ['One', 'Two', 'Three'];
  filteredFamilleOptions: Observable<string[]>;
  filteredLaboratoirOptions: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder) {

      this.productForm = this.fb.group({
        designation : ['', Validators.required],
        laboratoire : ['', Validators.required],
        famille : ['', Validators.required],
        conditionnement : this.fb.group({
        contenantCoffret : ['', Validators.required],
        testContenant : ['', Validators.required]}),
        stock : this.fb.group({
        cmm : ['', Validators.required],
        stockMiniMois : ['', Validators.required]})
      });
  }

  ngOnInit() {


    this.product$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.get_product(params.get('id'))));
    this.product$.subscribe((val: Product) => {
      this._updateFrom(val);
      console.log('the id is ' + val);
    });
    this.filteredFamilleOptions = this.productForm.get('famille').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.familleOptions.filter(option => option.toLowerCase().includes(filterValue));
  }


  private _updateFrom (product: Product) {
    this.productForm.patchValue({
      designation : [product.designation],
      laboratoire : [product.laboratoires.designation],
      famille : [product.familles.designation],
      conditionnement : {
      contenantCoffret : [product.contenantCoffret],
      testContenant : [product.testContenant] },
      stock : {
      cmm : [product.cmm],
      stockMiniMois : [product.StockMiniMois] }
    });

  }

  onSubmit() {
    console.warn(this.productForm.value);
  }

}
