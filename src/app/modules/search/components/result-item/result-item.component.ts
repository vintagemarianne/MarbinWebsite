import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PurchaseService } from '@shr/services/purchase.service';

import { Product } from '@shr/models/product';
import { LocalData } from '@shr/local-data';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {

  @Input() product: Product;

  constructor(private purchaseService: PurchaseService,
    private router: Router) { }

  ngOnInit(): void {
  }

  selectProduct() {
    this.purchaseService.setSelectedProduct(this.product);
    this.router.navigate([LocalData.routes.purchase]);
  }

}
