import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../services/search.service';
import { SearchParamsService } from '@shr/services/search-params.service';
import { HttpService } from '@shr/services/http.service';
import { PurchaseService } from '@shr/services/purchase.service';
import { CenteredModalService } from '@shr/services/centered-modal.service';

import { Product } from '@shr/models/product';
import { SearchParams } from '@shr/models/search-params';
import { LocalData } from '@shr/local-data';
import { CenteredModalEnum } from '@shr/models/enums/centered-modal-enum';

@Component({
  selector: 'app-search.page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  products: Product[] = [];
  searchParams: SearchParams = new SearchParams();

  isProductAvailabilityBusy: boolean = false;

  constructor(private searchService: SearchService,
    private searchParamsService: SearchParamsService,
    private router: Router,
    private httpService: HttpService,
    private purchaseService: PurchaseService,
    private centeredModalService: CenteredModalService) { }

  async ngOnInit() {
    this.searchParams = this.searchParamsService.getSearchParams();

    if (!this.searchParams || (!this.searchParams.PlaceLocation && !this.searchParams.PlaceName)) {
      this.router.navigate([LocalData.routes.home]);
      return;
    }

    this.centeredModalService.showModal(CenteredModalEnum.Loading);
    await this.searchService.searchProducts();
    this.products = this.searchService.getProducts();
    this.centeredModalService.closeModal();
  }

  async onSelectProcduct() {
    this.centeredModalService.showModal(CenteredModalEnum.Loading);
    let product: Product = await this.httpService.getProductDetail(this.purchaseService.getSelectedProduct().id);
    this.purchaseService.saveProductId(this.purchaseService.getSelectedProduct().id);
    this.purchaseService.setSelectedProduct(product);
    this.centeredModalService.closeModal();
    this.router.navigate([LocalData.routes.resultDetails]);
  }

}
