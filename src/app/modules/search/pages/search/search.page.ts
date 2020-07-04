import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../services/search.service';
import { SearchParamsService } from '@shr/services/search-params.service';
import { HttpService } from '@shr/services/http.service';
import { PurchaseService } from '@shr/services/purchase.service';

import { Product } from '@shr/models/product';
import { SearchParams } from '@shr/models/search-params';
import { LocalData } from '@shr/local-data';
import { from } from 'rxjs';

@Component({
  selector: 'app-search.page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  products: Product[] = [];
  // products = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
  searchParams: SearchParams = new SearchParams();

  isProductAvailabilityBusy: boolean = false;

  constructor(private searchService: SearchService,
    private searchParamsService: SearchParamsService,
    private router: Router,
    private httpService: HttpService,
    private purchaseService: PurchaseService) { }

  async ngOnInit() {
    await this.searchService.searchProducts();
    this.products = this.searchService.getProducts();
    // debugger;
    this.searchParams = this.searchParamsService.getSearchParams();

    // if (!this.searchParams || (!this.searchParams.PlaceLocation && !this.searchParams.PlaceName)) {
    //   this.router.navigate([LocalData.routes.home]);
    // }


  }

  async onSelectProcduct() {
    this.isProductAvailabilityBusy = true;
    let product: Product = await this.httpService.getProductDetail(this.purchaseService.getSelectedProduct().id);
    this.purchaseService.setSelectedProduct(product);
    this.isProductAvailabilityBusy = false;
    this.router.navigate([LocalData.routes.resultDetails]);
  }

}
