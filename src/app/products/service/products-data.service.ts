import {
  Injectable,
  Inject
} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


export const API_URL = 'https://lab-stock-api.herokuapp.com';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        return throwError(error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }






  constructor(private http: HttpClient , @Inject(API_URL) private apiUrl: string) { }


    get_elements(model, value?, param_key?): Observable<any[]> {
      const options = value ?
      { params: new HttpParams().set(param_key, value.trim()) } : {};
       const query: string = [
      this.apiUrl,
      '/',
      model,
      's/'].join('');
     return this.http.get(query, options).pipe(
      map((jsonArray: any[]) => jsonArray.map(jsonItem => jsonItem)));

    }

    get_elements_test(model, params_set?): Observable<any[]> {

      let _httpParams = new HttpParams();
      params_set.keys.forEach(key => {
         _httpParams = _httpParams.append(key, params_set.get(key)); });

      const options = {
        params : _httpParams };

      const query: string = [
        this.apiUrl,
        '/',
        model,
        's/'].join('');
       return this.http.get(query, options).pipe(
        map((jsonArray: any[]) => jsonArray.map(jsonItem => jsonItem)));
    }

    get_element(value, model): Observable<any> {
      const query: string = [
     this.apiUrl,
     '/',
     model,
     '/',
      value
    ].join('');
    return this.http.get(query);

   }

   add_element(object, model): Observable<any> {
    const query: string = [
      this.apiUrl,
      '/',
      model,
      's/'
     ].join('');
  return this.http.post(query, object, httpOptions).pipe(catchError(this.handleError)) ;

 }

  update_element(value, object, model): Observable<any> {

    const query: string = [
      this.apiUrl, '/', model, '/', value, '/'].join('');

     console.log(query);

     return this.http.put(query, object, httpOptions);
  }

  delete_element(value, model): Observable<any> {

    const query: string = [
      this.apiUrl,
      '/',
      model,
      '/',
       value,
       '/'
     ].join('');

     return this.http.delete(query);

  }


  }
