import { Component, OnInit } from '@angular/core';
import { Laboratoire } from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-laboratoire-list',
  templateUrl: './laboratoire-list.component.html',
  styleUrls: ['./laboratoire-list.component.scss']
})
export class LaboratoireListComponent implements OnInit {

  value: string;
  laboratoires: Laboratoire[];
  params: any[];
  constructor(private productData: ProductsDataService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap(value => this.productData.get_elements_test('laboratoire', value))).subscribe(
        (laboratoires => {this.laboratoires = laboratoires; })); }

}
