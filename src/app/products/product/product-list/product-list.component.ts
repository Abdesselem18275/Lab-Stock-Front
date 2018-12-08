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
  isComplete: boolean;
  mode: string;
  constructor(private productData: ProductsDataService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.isComplete = false;
    this.mode = 'indeterminate';
    this.route.queryParamMap.pipe(
      switchMap(value => this.productData.get_elements_test('product', value))).subscribe(
        (products => {this.products = products;
                      this.isComplete = true;
                      this.mode = 'determinate';
        })); }

  stockAdvisor(id: number) {
    const product = this.products.filter(x => (x.id === id))[0];
    const diff = product.total_stock_mois - product.StockMiniMois ;
      if (diff < 0 ) {
        return 1 ;
      } else if (diff === 1) {
        return 2 ;
      } else {
        return 3;
      }
  }
}
