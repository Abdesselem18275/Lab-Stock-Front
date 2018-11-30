import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, distinctUntilChanged } from 'rxjs/operators';
import { NavBarService } from '../service/nav-bar.service';

@Component({
  selector: 'app-nav-search-box',
  templateUrl: './nav-search-box.component.html',
  styleUrls: ['./nav-search-box.component.scss']
})
export class NavSearchBoxComponent implements OnInit {
  searchBoxActive: boolean ;
  value: string ;
  searchFrom = new FormGroup({
  searchBar: new FormControl()});
  active_element: string;

  constructor(private navService: NavBarService , private route: ActivatedRoute, private el: ElementRef, private router: Router) {
  }

  ngOnInit() {

    this.active_element = this.navService.get_active_element();

    fromEvent(this.el.nativeElement, 'keyup').pipe(
           map((e: any) => e.target.value), debounceTime(500), distinctUntilChanged(),
           filter((value: String) => value.length > 1 )).
           subscribe((term: String) => {
             this.router.navigate([this.navService.get_active_path()], { queryParams: { 'search': term },
            });
            });
  }

  toggle() {
    this.searchBoxActive = !this.searchBoxActive;

    if (!this.searchBoxActive) {
       this.searchFrom.reset();
       this.router.navigate([this.navService.get_active_path()]);
     }
}
}
