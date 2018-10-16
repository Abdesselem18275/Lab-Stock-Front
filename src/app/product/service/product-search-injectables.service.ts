import {
  ProductSearchService,API_URL
} from './product-search.service' ;


export const ProductSearchInjectables: Array<any> = [
  {provide : API_URL , useValue : API_URL},
  {provide : ProductSearchService , useClass: ProductSearchService}
] ;



