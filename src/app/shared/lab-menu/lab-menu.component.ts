import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { NavPath } from 'src/app/model';


@Component({
  selector: 'app-lab-menu',
  templateUrl: './lab-menu.component.html',
  styleUrls: ['./lab-menu.component.scss']
})
export class LabMenuComponent implements OnInit {
  navpaths: NavPath[] ;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('Produit', sanitizer.bypassSecurityTrustResourceUrl('src/assets/icons/familles_icon.svg'))
    .addSvgIcon('Journal', sanitizer.bypassSecurityTrustResourceUrl('src/assets/icons/produits_icon.svg'))
    .addSvgIcon('Commande', sanitizer.bypassSecurityTrustResourceUrl('src/assets/icons/produits_icon.svg'))
    .addSvgIcon('Profile', sanitizer.bypassSecurityTrustResourceUrl('src/assets/icons/profile_icon.svg'))
    .addSvgIcon('Deconnexion', sanitizer.bypassSecurityTrustResourceUrl('src/assets/icons/log_out_icon.svg'));
  }

  ngOnInit() {

    this.navpaths = [
      new NavPath('', 'Produit',     '../products/product/list', '', '', 'Produit'),
      new NavPath('', 'Journal',     '../stock/list', '', '', 'Journal'),
      new NavPath('', 'Commande',    '../stock-order/list', '',  '' , 'Commande'),
      new NavPath('', 'Profile',     '../products/product/list', '', '', 'Profile'),
      new NavPath('', 'Deconnexion', '../products/product/list', '', '', 'Deconnexion'),
    ];
  }

}
