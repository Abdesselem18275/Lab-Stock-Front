import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ProductsDataService } from 'src/app/products/service/products-data.service';
import { TransProduct } from 'src/app/model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  value: string;
  transProducts: TransProduct[];
  params: any[];
  constructor(private productData: ProductsDataService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap(value => this.productData.get_elements_test('transaction', value))).subscribe(
        (transProducts => {this.transProducts = transProducts; }));
  }

}
