import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDbService {
  private globalObject;

  constructor() {
    this.globalObject = window;
  }

  init(): Promise<any> {
    try {
      return Promise.resolve();
    } catch (e) {
      throw (e);
    }
  }

  get<T>(key: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      try {
        var item = this.globalObject.localStorage.getItem(key);
        var value = JSON.parse(item);
        resolve(value as T);
      } catch (e) {
        reject(e);
      }
    });
  }

  set<T>(key: string, value: T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      try {
        this.globalObject.localStorage.setItem(key, JSON.stringify(value));
        resolve(value as T);
      } catch (e) {
        reject(e);
      }
    })
  }

  remove(key: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.globalObject.localStorage.removeItem(key);
        resolve();
      } catch (e) {
        reject(e);
      }
    });

  }

  clear(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        this.globalObject.localStorage.clear();
        resolve();
      } catch (e) {
        reject(e);
      }
    })
  }

}
