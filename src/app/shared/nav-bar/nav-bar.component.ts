import { Component, OnInit, Input } from '@angular/core';
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
  @Input() nav_module: string;

  constructor(private navService: NavBarService) {

  }

  ngOnInit() {
    this.navpaths = this.navService.get_navpaths(this.nav_module);

  }
  set_active_link(label: string) {
     this.navService.set_active_link(label);
  }
  get_active_link() {
    return this.navService.get_active_link();
  }
}
