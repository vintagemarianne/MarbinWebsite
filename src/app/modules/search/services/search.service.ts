import { Injectable } from '@angular/core';

import { HttpService } from '@shr/services/http.service';
import { SearchParamsService } from '@shr/services/search-params.service';
import { FilterService } from './filter.service';

import { Product } from '@shr/models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private products: Product[];

  constructor(private httpService: HttpService,
    private searchParamsService: SearchParamsService,
    private FilterService: FilterService) { }

  async searchProducts() {
    this.products = await this.httpService.searchProducts(this.searchParamsService.getSearchQueryString());
    this.FilterService.setProducts(this.products);
    this.FilterService.init();
  }

  getProducts(): Product[] {
    return [...this.products];
  }
}
