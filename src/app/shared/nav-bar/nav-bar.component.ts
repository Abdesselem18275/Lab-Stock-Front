import { Component, OnInit } from '@angular/core';
import {NavPath} from '../../model';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navpaths: NavPath[] ;
  activeLink: String ;

  constructor() {

    this.navpaths = [new NavPath('produits', 'PRODUITS', '../../product/list', 'produits'),
              new NavPath('produits', 'LABORATOIRES', '../../laboratoire/list', 'laboratoires'),
              new NavPath('produits', 'FAMILLES', '../../familles/list', 'familles')];

    this.activeLink = this.navpaths[0].path;
    console.log(this.activeLink);
  }

  ngOnInit() {

  }


}
