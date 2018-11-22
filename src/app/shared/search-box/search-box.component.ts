import { Component, OnInit, Output, ElementRef, EventEmitter, Input } from '@angular/core';
import {fromEvent} from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsDataService } from 'src/app/products/service/products-data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  searchBoxActive: boolean ;
  @Input()  model: String;
  @Output() elements$: EventEmitter<any[]> = new EventEmitter<any[]> ();
  elements: any[] ;
  searchFrom = new FormGroup({
  searchBar: new FormControl()});

  constructor(private elementsData: ProductsDataService , private el: ElementRef) {
  }

  ngOnInit() {

    this.searchBoxActive = false;
    this.elementsData.get_elements('', this.model).subscribe
    (elements => { this.elements = elements; this.elements$.emit(this.elements); } );

    fromEvent(this.el.nativeElement, 'keyup').pipe(
           map((e: any) => e.target.value)).
           subscribe((value: string) => {
            this.elementsData.get_elements(value, this.model).
            subscribe(elements => this.elements$.emit(elements));
          });
  }

  toggle() {
    this.searchBoxActive = !this.searchBoxActive;

    if (!this.searchBoxActive) {
      this.elements$.emit(this.elements);
      this.searchFrom.reset();

    }


  }

}

