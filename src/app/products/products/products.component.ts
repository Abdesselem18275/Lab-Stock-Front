import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { NavBarService } from 'src/app/shared/service/nav-bar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
  this.router.navigate([this.navService.get_active_path()], { relativeTo: this.route } );
  }
}
