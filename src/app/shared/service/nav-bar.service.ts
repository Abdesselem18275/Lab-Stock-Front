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
    new NavPath('produits', 'PRODUITS', '../products/product/list', 'product'),
    new NavPath('produits', 'LABORATOIRES', '../products/laboratoire/list', 'laboratoire'),
    new NavPath('produits', 'FAMILLES', '../products/famille/list', 'famille'),
    new NavPath('stock', 'TOUT', '/stock/list', 'stock'),
    new NavPath('stock', 'ENTREE', '/stock/list', 'stock', JSON.parse('{"trans_type":"IN"}')),
    new NavPath('stock', 'SORTIE', '/stock/list', 'stock', JSON.parse('{"trans_type":"OUT"}'))
  ];

  }


  get_active_link() {
   return this.activeLink;
  }

  get_active_path() {
    if (this.activeLink !== undefined) {
      return this.navpaths.filter(navPath => navPath.label === this.activeLink)[0].path;
      } else {
      return this.navpaths[0].path;
      }
     }

  get_active_element(): string {
    if (this.activeLink !== undefined) {
    return this.navpaths.filter(navPath => navPath.label === this.activeLink)[0].element_name;
    } else {
    return this.navpaths[0].element_name;
    }
   }

  set_active_link(label) {
    this.activeLink = label;
  }

  get_navpath(nav_module: string) {
    const filter_navpaths = this.navpaths.filter(navPath => navPath.module === nav_module);
    this.activeLink = filter_navpaths[0].label;
    return filter_navpaths;
  }

  }

