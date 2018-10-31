import { Component, OnInit, Output, ElementRef, Input, EventEmitter } from '@angular/core';
import {fromEvent} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute , NavigationEnd } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  isSearchActive: boolean;
  @Input()  isDetailActive: boolean ;
  @Output() isSearchActive$ = new EventEmitter<boolean>();
  searchFrom = new FormGroup({
    searchBar: new FormControl()});

  constructor(private route: ActivatedRoute, private router: Router, private el: ElementRef) { }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
           map((e: any) => e.target.value)).
           subscribe((value: string) => {
             this.router.navigate(['/product-list', { val: value}]);
           });
  }

  activeInput() {
    this.isSearchActive = true;
    this.isSearchActive$.emit(true);
  }

  disableInput() {
    this.isSearchActive = false;
    this.searchFrom.reset({searchBar : ''});
    this.isSearchActive$.emit(false);
    this.router.navigate(['/product-list']);
  }
}
