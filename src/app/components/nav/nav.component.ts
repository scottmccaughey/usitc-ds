import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'ds-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  kss: object;
  menu = [];
  route: string;

  constructor(private config: ConfigService) {
    this.config.kss.subscribe((kss) => (this.kss = kss));
    this.config.route.subscribe((route) => (this.route = route));
  }

  ngOnInit() {
    console.log(this.kss);
    this.buildMenu();
  }

  buildMenu() {
    const home = {};

    home['name'] = 'Home';
    home['url'] = '';
    home['order'] = 0;
    home['child'] = false;
    this.menu.push(home);

    this.kss['sections'].forEach((section) => {
      const obj = {};

      obj['name'] = section.header;
      obj['url'] = '/' + section.referenceURI.replace(/-/g, '/');
      obj['order'] = section.referenceNumber;
      obj['child'] = section.depth > 1 ? true : false;

      if (section.depth <= 2) {
        this.menu.push(obj);
      }
    });
  }
}
