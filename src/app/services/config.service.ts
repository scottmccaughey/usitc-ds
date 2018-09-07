import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as kssConfig from '../../compiled-assets/styleguide/kss.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSource = new BehaviorSubject<object>(kssConfig);
  private routeSource = new BehaviorSubject<string>('');

  kss = this.configSource.asObservable();
  route = this.routeSource.asObservable();

  constructor() {}

  changeRoute(route: string) {
    this.routeSource.next(route);
  }

  unCamelCase(str) {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
    return str;
  }
}
