import { Injectable } from '@angular/core';
import { EventEmitter } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Dictionary<EventEmitter<any>> = {};

  constructor() { }

  emit(name: string, value?) {
    this.checkEvent(name);
    this.events[name].emit(value);
  }

  subscribe(name: string, func) {
    this.checkEvent(name);
    return this.events[name].subscribe(func);
  }

  private checkEvent(name: string) {
    if (!this.events[name]) {
      this.events[name] = new EventEmitter();
    }
  }

}

interface Dictionary<T> {
  [key: string]: T;
}