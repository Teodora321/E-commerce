import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../shared/interfaces/product';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

   readonly selectedProduct: IProduct;

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('product/products')
  }

  getCurrentProduct(id: number) {
    return this.http.get<IProduct>(`product/detail/${id}`)
  }
  selectProduct(product: IProduct) {
   return (this as any).selectedProduct = product;
  }

}
