import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  constructor(private productData: ProductsDataService , private route: ActivatedRoute) {
  }

  is_empty(): boolean {return false; }

  ngOnInit() {
  }

}
