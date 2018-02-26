import { Injectable } from '@angular/core';

@Injectable()
export class GlobalDataService {
  map = new Map();
  constructor() {
    this.makeMe();
  }
 private makeMe() {
    return this.map;
  }

}
