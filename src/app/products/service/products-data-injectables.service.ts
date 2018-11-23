import {
  ProductsDataService, API_URL
} from './products-data.service' ;

export const ProductsDataInjectables: Array<any> = [
  {provide : API_URL , useValue : API_URL},
  {provide : ProductsDataService , useClass: ProductsDataService}
] ;



