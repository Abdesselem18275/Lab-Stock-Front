import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-searchbar',
  templateUrl: './stock-searchbar.component.html',
  styleUrls: ['./stock-searchbar.component.scss']
})
export class StockSearchbarComponent implements OnInit {

  searchBoxActive: boolean ;
  value: string ;
  searchFrom = new FormGroup({
  searchBar: new FormControl()});

  constructor(private el: ElementRef, private router: Router) {
  }

  ngOnInit() {

    fromEvent(this.el.nativeElement, 'keyup').pipe(
           map((e: any) => e.target.value), debounceTime(500), distinctUntilChanged(),
           filter((value: String) => value.length > 1 )).
           subscribe((term: String) => {
             this.router.navigate(['stock/list'], { queryParams: { 'search': term }
            });
            });
  }

  toggle() {
    this.searchBoxActive = !this.searchBoxActive;

    if (!this.searchBoxActive) {
       this.searchFrom.reset();
       this.router.navigate(['stock/list']);
     }
}
}
