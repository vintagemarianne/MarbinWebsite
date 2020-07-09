import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Product } from '@shr/models/product';
import { User } from '@shr/models/user';
import { UserTicket } from '@shr/models/user-ticket';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private urls: any = {
    productList: environment.catalogueApiUrl + 'index?',
    product: environment.catalogueApiUrl + 'product/',
    ProductAvailability: environment.catalogueApiUrl + 'product/availability',
    signup: environment.usersApiUrl + 'signup',
    login: environment.usersApiUrl + 'signin'
  }

  searchProducts(queryString: string): Promise<Product[]> {
    return this.http.get<Product[]>(this.urls.productList + queryString).toPromise();
  }

  getProductDetail(productId: string): Promise<Product> {
    return this.http.get<Product>(this.urls.product + productId).toPromise();
  }

  signup(user: User): Promise<User> {
    return this.http.post<User>(this.urls.signup, user).toPromise();
  }

  login(loginInfo): Promise<UserTicket> {
    return this.http.post<UserTicket>(this.urls.login, loginInfo).toPromise();
  }
}
