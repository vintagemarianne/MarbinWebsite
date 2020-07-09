import { Injectable } from '@angular/core';

import { SearchParams } from '@shr/models/search-params';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {
  private searchParams: SearchParams = new SearchParams();

  constructor() { }

  getSearchParams(): SearchParams {
    return this.searchParams;
  }

  setSearchParams(params: SearchParams) {
    this.searchParams = params;
  }

  getSearchQueryString(): string {
    let query: string = '';

    if (this.searchParams.PlaceName) {
      query = `name=${this.searchParams.PlaceName}`;
    }

    if (this.searchParams.PlaceLocation) {
      query += `location_type=${this.searchParams.PlaceLocation}`;
    }

    // query = encodeURIComponent(query);

    return query;
  }
}
