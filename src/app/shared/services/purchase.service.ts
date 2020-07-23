import { Injectable } from '@angular/core';
import { Product } from '@shr/models/product';
import { ProductAvailabilityResponse } from '@shr/models/product-availability-response';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private selectedProduct: Product;
  private productId: string;
  private productAvailabilityResponse: ProductAvailabilityResponse;

  constructor() { }

  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }

  getSelectedProduct(): Product {
    return this.selectedProduct;
  }

  saveProductId(id: string) {
    this.productId = id;
  }

  getProductId(): string {
    return this.productId;
  }

  setProductAvailabilityResponse(res: ProductAvailabilityResponse) {
    this.productAvailabilityResponse = res;
  }

  getProductAvailabilityResponse(): ProductAvailabilityResponse {
    return this.productAvailabilityResponse;
  }
}
