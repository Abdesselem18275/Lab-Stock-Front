import {
  Injectable,
  Inject
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model';
import { map } from 'rxjs/operators';


export const API_URL = 'https://labstock-api.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http: HttpClient , @Inject(API_URL) private apiUrl: string) { }

    private get_result(query: string): Observable<Product[]> {
        return this.http.get(query).pipe(
        map((jsonArray: Product[]) => jsonArray.map(jsonItem => Product.fromJson(jsonItem)))
      );

    }


    get_products(value): Observable<Product[]> {
       const query: string = [
      this.apiUrl,
      '/products/',
       value
     ].join('');

     return this.get_result(query);

    }

    get_product(value): Observable<Product> {
      const query: string = [
     this.apiUrl,
     '/product/',
      value
    ].join('');

    return this.http.get(query).pipe(
      map((jsonItem: Product)  => Product.fromJson(jsonItem))
     );

   }



  }