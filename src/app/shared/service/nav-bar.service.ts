import { Injectable, Inject } from '@angular/core';
import { NavPath } from 'src/app/model';
import { Router, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  activeLink: string ;
  navpaths: NavPath[] ;
  constructor(private router: Router) {
    this.navpaths = [new NavPath('produits', 'PRODUITS', '../../product/list', 'produits'),
    new NavPath('produits', 'LABORATOIRES', '../../laboratoire/list', 'laboratoires'),
    new NavPath('produits', 'FAMILLES', '../../famille/list', 'familles')];

    this.activeLink = this.navpaths[0].path;
  }


  get_active_link() {
   return this.activeLink;
  }
  set_active_link(path) {
    this.activeLink = path;
  }

  get_navpath() {
    return this.navpaths;
  }

  }

