import { Injectable } from '@angular/core';
import { Product } from '@shr/models/product';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private selectedProduct: Product;

  constructor() { }

  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }

  getSelectedProduct(): Product {
    return this.selectedProduct;
  }
}
