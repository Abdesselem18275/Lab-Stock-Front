import { Component, OnInit } from '@angular/core';
import {Product} from '../../model';
import { ProductSearchService } from '../service/product-search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  public message_a: string ;

  constructor(private productData: ProductSearchService) { }

  is_empty(): boolean {return false; }

  ngOnInit() {
     this.productData.get_products().subscribe(products => this.products = products);
  }

  updateResults(results: Product[]) {
   this.products = results;
  }

}
