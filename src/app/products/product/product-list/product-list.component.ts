import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model';
import { ProductSearchService } from '../../service/product-search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  constructor(private productData: ProductSearchService , private route: ActivatedRoute) {
  }

  is_empty(): boolean {return false; }

  ngOnInit() {
   }

}
