import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model';
import { ProductSearchService } from '../../service/product-search.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  productForm: FormGroup;
  url: Observable<string> ;



  constructor(
    private route: ActivatedRoute,
    private service: ProductSearchService,
    private fb: FormBuilder) {

      this.productForm = this.fb.group({
        designation : ['', Validators.required],
        laboratoire : [''],
        famille : [''],
        conditionnement : this.fb.group({
        contenantCoffret : [''],
        testContenant : ['']}),
        stock : this.fb.group({
        cmm : [''],
        stockMiniMois : ['']})
      });
  }

  ngOnInit() {
    console.log('***************Hello*********************');
    this.product$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.get_product(params.get('id')))
    );
    this.product$.subscribe((val: Product) => {
      this.updateFrom(val);
      console.log('the id is ' + val);
    }
    );
    }
  updateFrom (product: Product) {
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
