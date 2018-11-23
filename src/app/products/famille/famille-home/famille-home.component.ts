import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Famille } from 'src/app/model';
@Component({
  selector: 'app-famille-home',
  templateUrl: './famille-home.component.html',
  styleUrls: ['./famille-home.component.scss']
})
export class FamilleHomeComponent implements OnInit {

  isSearchActive: Boolean ;
  familles: Famille[] ;
  model: String ;
  constructor() {}

  ngOnInit() {
    this.model = 'famille';
   }

  onclickSearchBar(activity: boolean) {
    this.isSearchActive = activity;
  }

  updateResults(familles: Famille[]) {
    this.familles = familles ;
  }

}
