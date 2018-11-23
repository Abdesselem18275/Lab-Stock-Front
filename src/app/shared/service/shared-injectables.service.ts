import {NavBarService } from './nav-bar.service';

export const SharedInjectablesService: Array<any> = [
  {provide : NavBarService , useClass: NavBarService}
];
