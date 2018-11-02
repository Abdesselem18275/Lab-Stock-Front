import { Component, OnInit, Output, ElementRef, Input, EventEmitter } from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute , NavigationEnd } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/model';
import { ProductSearchService } from '../../service/product-search.service';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  searchBoxActive: boolean ;
  @Output() products$: EventEmitter<Product[]> = new EventEmitter<Product[]> ();
  products: Product[] ;
  searchFrom = new FormGroup({
  searchBar: new FormControl()});

  constructor(private productData: ProductSearchService , private route: ActivatedRoute, private router: Router, private el: ElementRef) {  
  }

  ngOnInit() {

    this.searchBoxActive = false;
    this.productData.get_products('').subscribe
    ((products: Product[]) => { this.products = products; this.products$.emit(this.products); } );

    fromEvent(this.el.nativeElement, 'keyup').pipe(
           map((e: any) => e.target.value)).
           subscribe((value: string) => {
            this.productData.get_products(value).
            subscribe((products: Product[]) => this.products$.emit(products));
          });
  }

  toggle() {
    this.searchBoxActive = !this.searchBoxActive;

    if (!this.searchBoxActive) {
      this.products$.emit(this.products );
      this.searchFrom.reset();

    }


  }

}
