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

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events
    .subscribe((event) => {
    if (event instanceof NavigationEnd) {
      console.log('NavigationEnd:***************', event.url);
      event.url.search('/product-list') === -1  ?
      this.isDetailActive = true :
      this.isDetailActive = false;
      }
    });
  }
}

