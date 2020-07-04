import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '@shr/models/product';

import { PurchaseService } from '@shr/services/purchase.service';
import { HttpService } from '@shr/services/http.service';
import { LocalData } from '@shr/local-data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {

  product: Product;

  constructor(private purchaseService: PurchaseService,
    private httpService: HttpService,
    private router: Router) { }

  async ngOnInit() {
    if(!this.purchaseService.getSelectedProduct()) {
      this.router.navigate([LocalData.routes.home]);
    }

    this.product = this.purchaseService.getSelectedProduct();
  }

}
