import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model';
import { ProductSearchService } from '../service/product-search.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductSearchService
  ) { }

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.get_product(params.get('id')))
    );
    this.product$.subscribe(x => console.log(x));
    console.log('HELLO!!!!!!!!!');
  }

}
