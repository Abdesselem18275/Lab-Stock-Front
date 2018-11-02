import { Component, OnInit, Input } from '@angular/core';
import {NavPath} from '../../../model';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.scss']
})
export class ProductNavbarComponent implements OnInit {
  navpaths: NavPath[] ;
  activeLink: String ;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon('familles', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/familles_icon.svg'))
      .addSvgIcon('produits', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/produits_icon.svg'))
      .addSvgIcon('laboratoires', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/laboratoires_icon.svg'));
    this.navpaths = [new NavPath('PRODUITS', '../list', 'produits'),
              new NavPath('LABORATOIRES', '../../', 'laboratoires'),
              new NavPath('FAMILLES', '../../', 'familles')];

    this.activeLink = this.navpaths[0].path;
  }

  ngOnInit() {

  }

}
