import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchParamsService } from '@shr/services/search-params.service';

import { SearchParams } from '@shr/models/search-params';
import { LocalData } from '@shr/local-data';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchParams: SearchParams = new SearchParams();

  constructor(private router: Router,
    private searchParamsService: SearchParamsService) { }

  ngOnInit(): void {
    this.searchParams = this.searchParamsService.getSearchParams();
  }

  search() {
    if ((!this.searchParams.PlaceLocation && !this.searchParams.PlaceName) ||
      !this.searchParams.StartDate ||
      !this.searchParams.EndDate) {
      alert('Please fill all the neccessary parameters for search!');
      return;
    }

    this.searchParamsService.setSearchParams(this.searchParams);
    this.router.navigate([LocalData.routes.search], { queryParams: this.searchParams });
  }

}
