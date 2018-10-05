import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as kssConfig from '../../compiled-assets/styleguide/kss.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSource = new BehaviorSubject<object>(kssConfig);
  kss = this.configSource.asObservable();

  private routeSource = new BehaviorSubject<string>('');
  route = this.routeSource.asObservable();

  private navOpenSource = new BehaviorSubject<boolean>(false);
  navOpen = this.navOpenSource.asObservable();

  changeRoute(route: string) {
    this.routeSource.next(route);
  }

  toggleNav(navOpen: boolean) {
    navOpen = !navOpen;
    this.navOpenSource.next(navOpen);
  }

  unCamelCase(str) {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
    return str;
  }
}
