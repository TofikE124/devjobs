import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  localStorageExists() {
    return typeof localStorage != 'undefined';
  }

  getItem(key: string) {
    if (!this.localStorageExists()) return;
    return localStorage.getItem(key);
  }

  setItem(key: string, item: any) {
    if (!this.localStorageExists()) return;
    localStorage.setItem(key, item);
  }
}
