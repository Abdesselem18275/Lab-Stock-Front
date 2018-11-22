import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model';
@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {

  isSearchActive: Boolean ;
  products: Product[] ;
  model: String ;
  constructor() {}

  ngOnInit() {
    this.model = 'product';
  }

  onclickSearchBar(activity: boolean) {
    this.isSearchActive = activity;
  }

  updateResults(products: Product[]) {
    this.products = products ;
  }

}
