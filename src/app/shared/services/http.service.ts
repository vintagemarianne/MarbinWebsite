import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PurchaseService } from './purchase.service';
import { CenteredModalService } from '@shr/services/centered-modal.service';
import { TokenService } from '@shr/services/token.service';

import { environment } from '@env/environment';
import { Product } from '@shr/models/product';
import { User } from '@shr/models/user';
import { UserTicket } from '@shr/models/user-ticket';
import { ProductAvailabilityInput } from '@shr/models/product-availability-input';
import { ProductAvailabilityResponse } from '@shr/models/product-availability-response';
import { throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CenteredModalEnum } from '@shr/models/enums/centered-modal-enum';
import { OrderNewInput } from '@shr/models/order-new-input';
import { OrderNewResponse } from '@shr/models/order-new-response';
import { OrderConfirmInput } from '@shr/models/order-confirm-input';
import { OrderConfirmResponse } from '@shr/models/order-confirm-response';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
    private purchaseService: PurchaseService,
    private centeredModalService: CenteredModalService,
    private tokenService: TokenService) { }

  private urls: any = {
    productList: environment.catalogueApiUrl + 'index?',
    product: environment.catalogueApiUrl + 'product/',
    ProductAvailability: environment.catalogueApiUrl + 'product/availability',

    signup: environment.usersApiUrl + 'signup',
    login: environment.usersApiUrl + 'signin',
    getUserInfo: environment.usersApiUrl + 'status',
    updateUserInfo: environment.usersApiUrl + 'update/user',
    changePassword: environment.usersApiUrl + 'update/password',
    deleteAccount: environment.usersApiUrl + 'delete/user',

    newOrder: environment.ordersApiUrl + 'new',
    confirmOrder: environment.ordersApiUrl + 'confirm',
    cancelOrder: environment.ordersApiUrl + 'cancel'
  }

  searchProducts(queryString: string): Promise<Product[]> {
    return this.http.get<Product[]>(this.urls.productList + queryString).toPromise();
  }

  searchFeaturedProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(this.urls.productList + 'featured=true').toPromise();
  }

  getProductDetail(productId: string): Promise<Product> {
    return this.http.get<Product>(this.urls.product + productId).toPromise();
  }

  checkProductAvailability(input: ProductAvailabilityInput) {
    this.http.post<ProductAvailabilityResponse>(this.urls.ProductAvailability, input).pipe(catchError(err => {
      this.centeredModalService.showModal(CenteredModalEnum.ProductUnavailable);
      return throwError(err);
    })).subscribe((data: ProductAvailabilityResponse) => {
      this.centeredModalService.showModal(CenteredModalEnum.ProductAvailable);
      this.purchaseService.setProductAvailabilityResponse(data)
    });
  }

  signup(user): Promise<User> {
    return this.http.post<User>(this.urls.signup, user).toPromise();
  }

  login(loginInfo) {
    this.http.post<UserTicket>(this.urls.login, loginInfo).pipe(catchError(err => {
      alert(err.error.message);
      return throwError(err);
    })).subscribe(async (data: UserTicket) => {
      await this.tokenService.setUserTicket(data.ticket_name);
    });;

  }

  getUserInfo(ticketName: string): Promise<User> {
    return this.http.post<User>(this.urls.getUserInfo, { "ticket_name": ticketName }).toPromise();
  }

  updateUserInfo(newUser): Promise<any> {
    return this.http.post<any>(this.urls.updateUserInfo, newUser).toPromise();
  }

  changePassword(input) {
    this.http.post<any>(this.urls.changePassword, input).pipe(catchError(err => {
      alert(err.error.message);
      return throwError(err);
    })).subscribe((data) => {
    });;
  }

  deleteAccount(input) {
    return this.http.post<any>(this.urls.deleteAccount, input).pipe(catchError(err => {
      alert(err.error.message);
      return throwError(err);
    })).subscribe((data) => {
    });;
  }

  newOrder(input: OrderNewInput) {
    this.http.post<OrderNewResponse>(this.urls.newOrder, input).pipe(catchError(err => {
      this.centeredModalService.showModal(CenteredModalEnum.ProductUnavailable);
      return throwError(err);
    })).subscribe((data: OrderNewResponse) => {
      this.centeredModalService.showModal(CenteredModalEnum.Confirm);
      this.purchaseService.setNewOrderResponse(data);
    });;
  }

  confirmOrder(input: OrderConfirmInput) {
    this.http.post<OrderConfirmResponse>(this.urls.confirmOrder, input).pipe(catchError(err => {
      this.centeredModalService.showModal(CenteredModalEnum.ProductUnavailable);
      return throwError(err);
    })).subscribe((data: OrderConfirmResponse) => {
      this.centeredModalService.showModal(CenteredModalEnum.OrderSuccessful);
    });;
  }

  cancelOrder(input: OrderConfirmInput) {
    this.http.post<OrderConfirmResponse>(this.urls.cancelOrder, input).pipe(catchError(err => {
      this.centeredModalService.showModal(CenteredModalEnum.ProductUnavailable);
      return throwError(err);
    })).subscribe((data: OrderConfirmResponse) => {
      this.centeredModalService.showModal(CenteredModalEnum.OrderCancel);
    });;
  }
}
