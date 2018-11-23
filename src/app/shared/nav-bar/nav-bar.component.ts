import { Component, OnInit } from '@angular/core';
import {NavPath} from '../../model';
import { NavBarService } from '../service/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navpaths: NavPath[] ;
  activeLink: String ;

  constructor(private navService: NavBarService) {

    this.navpaths = navService.get_navpath();

  }

  ngOnInit() {
  }
  set_active_link(path: string) {
     this.navService.set_active_link(path);
  }
  get_active_link() {
    return this.navService.get_active_link();
  }
}
