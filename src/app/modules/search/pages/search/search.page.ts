import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';

import { Product } from '@shr/models/product';

@Component({
  selector: 'app-search.page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  products: Product[] = [];

  constructor(private searchService: SearchService) { }

  async ngOnInit() {
    await this.searchService.searchProducts();
    this.products = this.searchService.getProducts();
    debugger;
  }

}
