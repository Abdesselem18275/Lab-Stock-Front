import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model';
import { ProductSearchService } from '../service/product-search.service';
import { FormBuilder, FormGroup } from '@angular/forms';



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
        designation : [''],
        laboratoire : [''],
        famille : [''],
        contenantCoffret : [''],
        testContenant : [''],
        cmm : [''],
        stockMiniMois : [''],
      });
  }

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.get_product(params.get('id')))
    );
    this.product$.subscribe((val: Product) => (this.resetForm(val)));
  }
  resetForm (product: Product) {
    this.productForm.reset({
      designation : [product.designation],
      laboratoire : [product.laboratoires],
      famille : [product.familles],
      contenantCoffret : [product.contenantCoffret],
      testContenant : [product.testContenant],
      cmm : [product.cmm],
      stockMiniMois : [product.StockMiniMois],
    });

  }

}
