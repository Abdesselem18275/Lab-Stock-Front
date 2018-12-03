import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/shared/service/nav-bar.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  isListActive: boolean  ;
  isNewActive: boolean ;
  constructor(private navService: NavBarService , private route: ActivatedRoute , private router: Router) {

    router.url.indexOf('list') === -1 ?
    this.isListActive = false :
    this.isListActive = true ;
    router.url.indexOf('new') === -1 ?
    this.isNewActive = false :
    this.isNewActive = true ;
  }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd),
                             map(e => e['urlAfterRedirects'])).
                             subscribe(url => {
                                url.indexOf('list') === -1 ?
                                this.isListActive = false :
                                this.isListActive = true ;
                                url.indexOf('new') === -1 ?
                                this.isNewActive = false :
                                this.isNewActive = true ;
                             }); }

  to_list() {
  this.router.navigate(['../stock/list'], { relativeTo: this.route } );
  }


}
