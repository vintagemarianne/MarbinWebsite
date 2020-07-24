import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CenteredModalService } from '@shr/services/centered-modal.service';
import { TokenService } from '@shr/services/token.service';
import { HttpService } from '@shr/services/http.service';
import { PurchaseService } from '@shr/services/purchase.service';
import { SearchParamsService } from '@shr/services/search-params.service';

import { CenteredModalEnum } from '@shr/models/enums/centered-modal-enum';
import { LocalData } from '@shr/local-data';
import { OrderNewInput } from '@shr/models/order-new-input';
import { OrderNewResponse } from '@shr/models/order-new-response';
import { OrderConfirmInput } from '@shr/models/order-confirm-input';

@Component({
  selector: 'app-centered-modal',
  templateUrl: './centered-modal.component.html',
  styleUrls: ['./centered-modal.component.scss']
})
export class CenteredModalComponent implements OnInit {

  newOrder: OrderNewResponse;

  public CenteredModalEnum = CenteredModalEnum;

  constructor(public centeredModalService: CenteredModalService,
    private router: Router,
    private tokenService: TokenService,
    private httpService: HttpService,
    private purchaseService: PurchaseService,
    private searchParamsService: SearchParamsService) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate([LocalData.routes.home]);
    this.centeredModalService.closeModal();
  }

  async book() {
    this.centeredModalService.showModal(CenteredModalEnum.Loading);

    if (!this.tokenService.isLoggedIn()) {
      this.centeredModalService.showModal(CenteredModalEnum.NotAuthorized);
      return;
    }

    let input: OrderNewInput = new OrderNewInput();
    input.id = this.purchaseService.getProductId();
    input.ticket_name = this.tokenService.getUserTicket();
    input.start_date = this.searchParamsService.getSearchParams().StartDate;
    input.end_date = this.searchParamsService.getSearchParams().EndDate;
    input.traveller_count = this.searchParamsService.getSearchParams().TravellerCount.toString();

    await this.httpService.newOrder(input);
  }

  signup() {
    this.router.navigate([LocalData.routes.signup]);
    this.centeredModalService.closeModal();
  }

  login() {
    this.router.navigate([LocalData.routes.login]);
    this.centeredModalService.closeModal();
  }

  async confirm() {
    let input: OrderConfirmInput = new OrderConfirmInput();
    input.ticket_name = this.tokenService.getUserTicket();
    input.order_id = this.purchaseService.getNewOrderResponse().order_id;

    await this.httpService.confirmOrder(input);
  }

  async cancel() {
    let input: OrderConfirmInput = new OrderConfirmInput();
    input.ticket_name = this.tokenService.getUserTicket();
    input.order_id = this.purchaseService.getNewOrderResponse().order_id;

    await this.httpService.cancelOrder(input);
  }

}
