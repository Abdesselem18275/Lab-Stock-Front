import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Laboratoire } from 'src/app/model';
@Component({
  selector: 'app-laboratoire-home',
  templateUrl: './laboratoire-home.component.html',
  styleUrls: ['./laboratoire-home.component.scss']
})
export class LaboratoireHomeComponent implements OnInit {

  isSearchActive: Boolean ;
  laboratoires: Laboratoire[] ;
  model: String ;
  constructor() {}

  ngOnInit() {
    this.model = 'laboratoire';
   }

  onclickSearchBar(activity: boolean) {
    this.isSearchActive = activity;
  }

  updateResults(laboratoires: Laboratoire[]) {
    this.laboratoires = laboratoires ;
  }

}
