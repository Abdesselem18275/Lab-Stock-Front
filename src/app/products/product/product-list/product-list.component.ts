import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  value: string;
  products: Product[];
  params: any[];
  constructor(private productData: ProductsDataService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap(value => this.productData.get_elements_test('product', value))).subscribe(
        (products => {this.products = products; })); }
}
