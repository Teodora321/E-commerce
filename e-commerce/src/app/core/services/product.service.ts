import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../shared/interfaces/product';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

   selectedProduct: IProduct;

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:9999/api/product/products')
  }

  getCurrentProduct(id: number) {
    return this.http.get<IProduct>(`http://localhost:9999/api/product/detail/${id}`)
  }
  selectProduct(product: IProduct) {
   return this.selectedProduct = product;
  }

}
