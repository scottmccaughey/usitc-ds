import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';

import { ConfigService } from './services/config.service';
import { StyleguideComponent } from './components/styleguide/styleguide.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [ Location, { provide: LocationStrategy, useClass: PathLocationStrategy } ]
})
export class AppComponent implements OnInit {
  kss: object;
  menu = [];
  route = this.location.path();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private location: Location,
    private config: ConfigService
  ) {
    this.config.kss.subscribe((kss) => (this.kss = kss));
    this.config.route.subscribe((route) => (this.route = route));

    this.kss['sections'].forEach((section) => {
      const obj = {};

      obj['path'] = section.referenceURI.replace(/-/g, '/');
      obj['component'] = StyleguideComponent;
      obj['data'] = { title: section.reference.replace(/\./g, ': ') };

      this.router.config.unshift(obj);
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .subscribe((event) => {
        const pageTitle =
          event['title'] === 'Home'
            ? 'USITC Design System'
            : this.config.unCamelCase(event['title']) + ' | USITC Design System';
        this.titleService.setTitle(pageTitle);
        this.config.changeRoute(this.location.path());
      });
  }
}
