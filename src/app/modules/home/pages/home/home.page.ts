import { Component, OnInit } from '@angular/core';

import { HttpService } from '@shr/services/http.service';

import { Product } from '@shr/models/product';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private httpService: HttpService) { }

  async ngOnInit() {
    this.featuredProducts = await this.httpService.searchFeaturedProducts();
  }

}
