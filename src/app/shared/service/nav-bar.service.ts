import { Injectable } from '@angular/core';
import { NavPath } from 'src/app/model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  activeLink: string ;
  navpaths: NavPath[] ;
  constructor(private router: Router) {
    this.navpaths = [
    new NavPath('produits', 'PRODUITS', '../../product/list', 'produits'),
    new NavPath('produits', 'LABORATOIRES', '../../laboratoire/list', 'laboratoires'),
    new NavPath('produits', 'FAMILLES', '../../famille/list', 'familles'),
    new NavPath('stock', 'TOUT', '/stock/list', 'familles'),
    new NavPath('stock', 'ENTREE', '/stock/list', 'familles', JSON.parse('{"trans_type":"IN"}')),
    new NavPath('stock', 'SORTIE', '/stock/list', 'familles', JSON.parse('{"trans_type":"OUT"}'))
  ];
    this.activeLink = this.navpaths[0].label;
  }


  get_active_link() {
   return this.activeLink;
  }
  set_active_link(label) {
    this.activeLink = label;
  }


  get_navpath(nav_module: string) {
    const filter_navpaths = this.navpaths.filter(navPath => navPath.module === nav_module);
    return filter_navpaths;
  }

  }

