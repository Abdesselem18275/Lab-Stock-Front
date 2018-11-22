import { Component, OnInit, Input } from '@angular/core';
import { Laboratoire } from 'src/app/model';
import { ProductsDataService } from '../../service/products-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laboratoire-list',
  templateUrl: './laboratoire-list.component.html',
  styleUrls: ['./laboratoire-list.component.scss']
})
export class LaboratoireListComponent implements OnInit {

  @Input() laboratoires: Laboratoire[];

  constructor(private laboratoireData: ProductsDataService , private route: ActivatedRoute) {
  }

  is_empty(): boolean {return false; }

  ngOnInit() {
   }

}
