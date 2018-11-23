import { Component, OnInit, Input } from '@angular/core';
import { Famille } from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-famille-list',
  templateUrl: './famille-list.component.html',
  styleUrls: ['./famille-list.component.scss']
})
export class FamilleListComponent implements OnInit {

  @Input() familles: Famille[];

  constructor(private familleData: ProductsDataService , private route: ActivatedRoute) {
  }

  is_empty(): boolean {return false; }

  ngOnInit() {
   }

}
