import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})

export class ProductHeaderComponent implements OnInit {
  isDetailActive: Boolean;
  isSearchActive: Boolean ;
  constructor(private router: Router) {}

  ngOnInit() {
    this.isDetailActive = false;
    this.router.events
    .subscribe((event) => {
    if (event instanceof NavigationEnd) {
      event.url.search('/product-list') === -1  ?
      this.isDetailActive = true :
      this.isDetailActive = false;
      }
    });
  }
  onclickSearchBar(activity: boolean) {
    this.isSearchActive = activity;
    console.log('Is clicked*************'+ this.isSearchActive);
  }
}

