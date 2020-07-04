import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Product } from '@shr/models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private urls: any = {
    productList: environment.catalogueApiUrl + 'index?',
    product: environment.catalogueApiUrl + 'product/',
    ProductAvailability: environment.catalogueApiUrl + 'product/availability',
  }

  searchProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(this.urls.productList + 'name=saint loup').toPromise();
  }
}
