import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class localstorageService {


  constructor() {
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, (value));
  }

  getItem(key: string): any {
    let value = localStorage.getItem(key);
    if (!value) {
      return null;
    }
    return (value);
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }


}
