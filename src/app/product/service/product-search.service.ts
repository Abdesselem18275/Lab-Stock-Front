import {
  Injectable,
  Inject
} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model';
import { map } from 'rxjs/operators';

export const API_URL = 'https://labstock-api.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http: HttpClient , @Inject(API_URL) private apiUrl: string) { }

    private get_result(query:string): Observable<Product[]>
    {
      return this.http.get(query).pipe(
        map((jsonArray: Object[]) => jsonArray.map(jsonItem => Product.fromJson(jsonItem)))
      );

    }


    get_products_search(value): Observable<Product[]>

      {
       const query : string = [
      this.apiUrl, 
      '/products/',
       value
     ].join('');

     return this.get_result(query)

    }

    get_products(): Observable<Product[]>
    {
      const query : string = [
       this.apiUrl, 
       '/products/'
      ].join('');
      
      return this.get_result(query)
   }

  }