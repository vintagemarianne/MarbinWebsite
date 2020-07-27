import { Injectable } from '@angular/core';

import { EventService } from '@shr/services/event.service';

import { Filter } from '@shr/models/filter';
import { Product } from '@shr/models/product';
import { LocalData } from '@shr/local-data';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private locationTypes: Filter[] = [];
  private products: Product[] = [];
  private filteredProducts: Product[] = [];

  private prices: Filter[] = [
    {
      title: 'Less than 350€',
      checked: false
    },
    {
      title: 'Between 350 - 400€',
      checked: false
    },
    {
      title: 'Between 400 - 450€',
      checked: false
    },
    {
      title: 'More than 450€',
      checked: false
    },
  ]

  constructor(private eventService: EventService) { }

  init() {
    this.filteredProducts = this.products;
    this.locationTypes = [];

    this.products.forEach(product => {
      if (this.locationTypes.some(type => type.title === product.location_type)) {
        return;
      } else {
        this.locationTypes.push(new Filter(product.location_type, false));
      }
    });

    this.eventService.emit(LocalData.events.filtersUpdated);
  }

  getLocationTypes(): Filter[] {
    return this.locationTypes;
  }

  getPrices(): Filter[] {
    return this.prices;
  }

  setLocationTypes(types: Filter[]) {
    this.locationTypes = types;
  }

  getProducts(): Product[] {
    return this.products;
  }

  setProducts(products: Product[]) {
    this.products = products;
  }

  getFilteredProducts(): Product[] {
    return this.filteredProducts;
  }

  setFilteredProducts(products: Product[]) {
    this.filteredProducts = products;
  }

  filterProducts(index: number, type: string) {
    switch (type) {
      case 'locationType':
        this.locationTypes[index].checked = !this.locationTypes[index].checked;
        // this.filterLocationType();
        break;
      case 'price':
        this.prices[index].checked = !this.prices[index].checked;
        // this.filterPrice();
        break;
    }

    this.filter();

    this.eventService.emit(LocalData.events.filtersUpdated);
  }

  filterLocationType() {
    this.filteredProducts = [];

    this.locationTypes.forEach(type => {
      if (type.checked) {
        this.products.forEach(product => {
          if (product.location_type === type.title) {
            this.filteredProducts.push(product);
          }
        })
      }
    })
  }

  filter() {
    if (this.prices.every(price => price.checked === false) && this.locationTypes.every(type => type.checked === false)) {
      this.filteredProducts = this.products;
      return;

    } else if (this.prices.every(price => price.checked === false)) {
      this.filterLocationType();
      return;

    } else if (this.locationTypes.every(type => type.checked === false)) {
      this.filteredProducts = [];

      this.prices.forEach(price => {
        if (price.checked) {
          switch (price.title) {
            case 'Less than 350€':
              this.products.forEach(product => {
                if (+product.price < 350) {
                  this.filteredProducts.push(product);
                }
              })
              break;
            case 'Between 350 - 400€':
              this.products.forEach(product => {
                if (+product.price >= 350 && +product.price < 400) {
                  this.filteredProducts.push(product);
                }
              })
              break;
            case 'Between 450 - 450€':
              this.products.forEach(product => {
                if (+product.price >= 400 && +product.price < 450) {
                  this.filteredProducts.push(product);
                }
              })
              break;
            case 'More than 450€':
              this.products.forEach(product => {
                if (+product.price >= 450) {
                  this.filteredProducts.push(product);
                }
              })
              break;
          }
        }
      })

      return;
    }

    this.filteredProducts = [];

    let types = this.locationTypes.map(type => {
      if (type.checked) {
        return type.title;
      }
    });

    this.prices.forEach(price => {
      if (price.checked) {
        switch (price.title) {
          case 'Less than 350€':
            this.products.forEach(product => {
              if (+product.price < 350 && types.indexOf(product.location_type) > -1) {
                this.filteredProducts.push(product);
              }
            })
            break;
          case 'Between 350 - 400€':
            this.products.forEach(product => {
              if (+product.price >= 350 && +product.price < 400 && types.indexOf(product.location_type) > -1) {
                this.filteredProducts.push(product);
              }
            })
            break;
          case 'Between 450 - 450€':
            this.products.forEach(product => {
              if (+product.price >= 400 && +product.price < 450 && types.indexOf(product.location_type) > -1) {
                this.filteredProducts.push(product);
              }
            })
            break;
          case 'More than 450€':
            this.products.forEach(product => {
              if (+product.price >= 450 && types.indexOf(product.location_type) > -1) {
                this.filteredProducts.push(product);
              }
            })
            break;
        }
      }
    })
  }

  removeFilters() {
    this.locationTypes.forEach(type => type.checked = false);
    this.prices.forEach(price => price.checked = false);
    this.filter();
    this.eventService.emit(LocalData.events.filtersUpdated);
  }

}
