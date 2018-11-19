import { Component, OnInit } from '@angular/core';
import { Product, Laboratoire, Famille } from 'src/app/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from '../../service/products-data.service';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {

  product: Product ;
  laboraoire: Laboratoire ;
  familles: Famille[];
  laboratoires: Laboratoire[];
  productForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder) {
      this.productForm = this.fb.group({
        designation : ['', Validators.required],
        reference : ['', Validators.required],
        laboratoire : ['', Validators.required],
        famille : ['', Validators.required],
        conditionnement : this.fb.group({
        contenantCoffret : ['', Validators.required],
        testContenant : ['', Validators.required]}),
        stock : this.fb.group({
        cmm : ['', Validators.required],
        stockMiniMois : ['', Validators.required]})
      });
  }

  ngOnInit() {
    this.service.get_elements('', 'famille').subscribe( (familles: Famille[]) => this.familles = familles);
    this.service.get_elements('', 'laboratoire').subscribe( (laboratoires: Laboratoire[]) => this.laboratoires = laboratoires);
  }

  onSubmit() {

    this.product = Product.fromFrom(this.productForm, 0);

    console.warn(JSON.stringify(this.product));
    this.service.add_element(JSON.stringify(this.product), 'product').
    subscribe(x => console.log(x));
  }

}
