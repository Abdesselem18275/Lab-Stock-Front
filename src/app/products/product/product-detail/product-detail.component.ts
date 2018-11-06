import { Component, OnInit } from '@angular/core';
import { map, switchMap, startWith, filter } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, observable } from 'rxjs';
import { Product , Famille , Laboratoire} from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  familles$: Observable<Famille[]>;
  laboratoires$: Observable<Laboratoire[]>;
  productForm: FormGroup;

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

    this.familles$ = this.service.get_familles('');
    this.laboratoires$ = this.service.get_laboratoires('');

    this.product$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.get_product(params.get('id'))));

    this.product$.subscribe((val: Product) => {
      this._updateFrom(val);
    });

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
