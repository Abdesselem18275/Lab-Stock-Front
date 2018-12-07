import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/shared/service/nav-bar.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-stock-order',
  templateUrl: './stock-order.component.html',
  styleUrls: ['./stock-order.component.scss']
})
export class StockOrderComponent implements OnInit {

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
    this.navService.set_active_link('stock-order');
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
