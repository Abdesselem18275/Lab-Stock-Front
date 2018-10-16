import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { ProductSearchService } from '../service/product-search.service';
import {fromEvent} from 'rxjs';
import { map, switchAll } from 'rxjs/operators';
import { Product } from '../../model';


@Component({
  selector: 'app-search-bar',
  template: '<input type="text" autofocus>',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  @Output() results: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  constructor(private productService: ProductSearchService, private el: ElementRef) { }

  ngOnInit(): void  {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      map((value: string) => this.productService.get_products_search(value)),
      switchAll()).
      subscribe(
        (results: Product[] ) => {this.results.emit(results);
        },
        (err: any) => { console.log(err);
        },
        () => { // on completion
        }
      );
  }

}
