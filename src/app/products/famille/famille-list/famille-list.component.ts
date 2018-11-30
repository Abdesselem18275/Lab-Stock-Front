import { Component, OnInit, Input } from '@angular/core';
import { Famille } from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-famille-list',
  templateUrl: './famille-list.component.html',
  styleUrls: ['./famille-list.component.scss']
})
export class FamilleListComponent implements OnInit {

  value: string;
  familles: Famille[];
  params: any[];
  constructor(private productData: ProductsDataService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap(value => this.productData.get_elements_test('famille', value))).subscribe(
        (familles => {this.familles = familles; })); }


}
