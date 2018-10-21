import { Component, OnInit } from '@angular/core';
import {NavPath} from '../../model';
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
    this.navpaths = [new NavPath('Produits', 'product-list', 'produits'),
              new NavPath('Laboratoires', 'lab-list', 'laboratoires'),
              new NavPath('Familles', 'reactive-list', 'familles')];

    this.activeLink = this.navpaths[0].path;
  }

  ngOnInit() {

  }

}
