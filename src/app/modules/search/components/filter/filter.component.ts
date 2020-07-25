import { Component, OnInit } from '@angular/core';

import { EventService } from '@shr/services/event.service';
import { FilterService } from '../../services/filter.service';

import { Filter } from '@shr/models/filter';
import { LocalData } from '@shr/local-data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  locationTypes: Filter[];
  prices: Filter[] = [];

  constructor(private eventService: EventService,
    private filterService: FilterService) { }

  ngOnInit(): void {
    this.eventService.subscribe(LocalData.events.filtersUpdated, () => {
      this.locationTypes = this.filterService.getLocationTypes();
      this.prices = this.filterService.getPrices();
    })
  }

  toggleFilter(filter: string, index: number) {
    switch (filter) {
      case 'locationType':
        this.filterService.filterProducts(index, filter);
        break;

      case 'price':
        this.filterService.filterProducts(index, filter);
        break;
    }
  }

  removeFilters() {
    this.filterService.removeFilters();
  }

}
