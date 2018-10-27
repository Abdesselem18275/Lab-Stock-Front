import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Product} from '../../model';
import { ProductSearchService } from '../service/product-search.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productData: ProductSearchService , private route: ActivatedRoute) {
  }

  is_empty(): boolean {return false; }

  ngOnInit() {
     this.products$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.productData.get_products(params.get('val'));
      })
      );
   }






}
