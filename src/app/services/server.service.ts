
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Operator, Subject, Subscription, Observer } from 'rxjs/Rx';
import 'rxjs';




@Injectable()
export class ServerService {
  some: Observable<string>;

  constructor(private http: Http) {
  }
  getData() {
    return this.http.get("http://localhost:4200/assets/dane.json").map((value) => {
      return value.json();
    });
  }
  pushData(data: any) {
    return this.http.post('http://localhost:4200/assets/dane', data)
  }
  coutning() {
    return Observable.create((observer: Observer<any>) => {
        setTimeout(() => {
          observer.next('rumun to zle imie')},
          4000)
    });
  }
}
