import { Component, OnInit, Input } from '@angular/core'; 
import { Router } from '@angular/router';

import { HttpService } from '@shr/services/http.service';
import { PurchaseService } from '@shr/services/purchase.service';
import { CenteredModalService } from '@shr/services/centered-modal.service';

import { Product } from '@shr/models/product';
import { CenteredModalEnum } from '@shr/models/enums/centered-modal-enum';
import { LocalData } from '@shr/local-data';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private httpService: HttpService,
    private purchaseService: PurchaseService,
    private centeredModalService: CenteredModalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async selectProduct() {
    this.purchaseService.setSelectedProduct(this.product);

    this.centeredModalService.showModal(CenteredModalEnum.Loading);
    let product: Product = await this.httpService.getProductDetail(this.purchaseService.getSelectedProduct().id);
    this.purchaseService.saveProductId(this.purchaseService.getSelectedProduct().id);
    this.purchaseService.setSelectedProduct(product);
    this.centeredModalService.closeModal();
    this.router.navigate([LocalData.routes.resultDetails]);
  }

}
