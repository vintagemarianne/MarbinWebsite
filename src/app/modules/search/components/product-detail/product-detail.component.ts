import { Component, OnInit, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

import { HttpService } from '@shr/services/http.service';
import { CenteredModalService } from '@shr/services/centered-modal.service';
import { SearchParamsService } from '@shr/services/search-params.service';
import { PurchaseService } from '@shr/services/purchase.service';

import { CenteredModalEnum } from '@shr/models/enums/centered-modal-enum';
import { ProductAvailabilityInput } from '@shr/models/product-availability-input';
import { Product } from '@shr/models/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  
  constructor(private httpService: HttpService,
    private centeredModalService: CenteredModalService,
    private searchParamsService: SearchParamsService,
    private purchaseService: PurchaseService) { }

  swiperConfig: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    loop: false
  };

  ngOnInit(): void {
  }
  
  checkAvailability() {
    let input: ProductAvailabilityInput = new ProductAvailabilityInput();
    input.product_id = this.purchaseService.getProductId();
    input.start_date = this.searchParamsService.getSearchParams().StartDate;
    input.end_date = this.searchParamsService.getSearchParams().EndDate;
    input.travellers_count = this.searchParamsService.getSearchParams().TravellerCount;

    this.centeredModalService.showModal(CenteredModalEnum.Loading);
    this.httpService.checkProductAvailability(input);
  }

}
