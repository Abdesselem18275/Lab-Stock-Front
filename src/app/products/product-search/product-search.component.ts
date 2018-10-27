import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute , NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  @Output()
  isActive: boolean;
  isDetailActive: boolean ;
  searchBar = new FormControl('');

  constructor(private route: ActivatedRoute, private router: Router, private el: ElementRef) { }

  ngOnInit() {
    this.isActive = false;
    fromEvent(this.el.nativeElement, 'keyup').pipe(
           map((e: any) => e.target.value)).
           subscribe((value: string) => {
             this.router.navigate(['/product-list', { val: value}]);
           });

    this.router.events
    .subscribe((event) => {
    if (event instanceof NavigationEnd) {
      event.url.search('/product-list') === -1  ?
      this.isDetailActive = true :
      this.isDetailActive = false;
      }
    });

  }

  activeInput() {
    this.isActive = true;
  }

  disableInput() {
    this.isActive = false;
    this.searchBar.setValue('');
  }
}
