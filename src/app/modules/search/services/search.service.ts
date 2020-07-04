import { Injectable } from '@angular/core';

import { HttpService } from '@shr/services/http.service';
import { Product } from '@shr/models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private products: Product[];

  constructor(private httpService: HttpService) { }

  async searchProducts() {
    this.products = await this.httpService.searchProducts();
    debugger;
  }

  getProducts(): Product[] {
    return [...this.products];
  }
}
