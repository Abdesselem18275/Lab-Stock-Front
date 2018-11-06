import {
  Injectable,
  Inject
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Famille , Laboratoire} from '../../model';
import { map } from 'rxjs/operators';


export const API_URL = 'https://labstock-api.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http: HttpClient , @Inject(API_URL) private apiUrl: string) { }

    private get_result(query: string): Observable<Product[]> {
        return this.http.get(query).pipe(
        map((jsonArray: Product[]) => jsonArray.map(jsonItem => Product.fromJson(jsonItem) ))
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


  private get_result_famille(query: string): Observable<Famille[]> {
    return this.http.get(query).pipe(
    map((jsonArray: Famille[]) => jsonArray.map(jsonItem => Famille.fromJson(jsonItem) ))
  );

}


get_familles(value): Observable<Famille[]> {
   const query: string = [
  this.apiUrl,
  '/familles/',
   value
 ].join('');

 return this.get_result_famille(query);

}

get_famille(value): Observable<Famille> {
  const query: string = [
 this.apiUrl,
 '/famille/',
  value
].join('');

return this.http.get(query).pipe(
  map((jsonItem: Famille)  => Famille.fromJson(jsonItem))
 );

}

private get_result_laboratoire(query: string): Observable<Laboratoire[]> {
  return this.http.get(query).pipe(
  map((jsonArray: Laboratoire[]) => jsonArray.map(jsonItem => Laboratoire.fromJson(jsonItem) ))
);

}


get_laboratoires(value): Observable<Laboratoire[]> {
 const query: string = [
this.apiUrl,
'/laboratoires/',
 value
].join('');

return this.get_result_laboratoire(query);

}

get_laboratoire(value): Observable<Laboratoire> {
const query: string = [
this.apiUrl,
'/laboratoire/',
value
].join('');

return this.http.get(query).pipe(
map((jsonItem: Laboratoire)  => Laboratoire.fromJson(jsonItem))
);

}





  }
