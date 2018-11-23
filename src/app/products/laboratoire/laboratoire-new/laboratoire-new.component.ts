import { Component, OnInit } from '@angular/core';
import { Laboratoire } from 'src/app/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsDataService } from '../../service/products-data.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-laboratoire-new',
  templateUrl: './laboratoire-new.component.html',
  styleUrls: ['./laboratoire-new.component.scss']
})
export class LaboratoireNewComponent implements OnInit {

  laboratoire: Laboratoire ;
  laboratoireForm: FormGroup;
  server_error: any;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsDataService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router ) {
      this.laboratoireForm = this.fb.group({
        designation : ['', Validators.required]
      });
    this.server_error = {};
  }

  ngOnInit() {

  }

  onSubmit() {

    const element: HTMLElement = document.getElementById('submit-button') as HTMLElement ;
    element.click();
    this.laboratoire = this.laboratoireForm.value.designation  ;
    this.service.add_element(JSON.stringify(this.laboratoire), 'laboratoire').
    subscribe(
     () =>  {
        this.snackBar.open('Element ajouter', '' , {duration: 1000, });
        this.router.navigate(['../list'], { relativeTo: this.route } ); },
      error => {
        this.server_error = error ; this.snackBar.open('Erreur');
        console.warn(this.server_error); }
    );
  }

}
