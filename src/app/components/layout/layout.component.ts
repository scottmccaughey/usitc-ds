import { Component, OnInit } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'ds-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {
  navOpen;

  constructor(public config: ConfigService) {
    this.config.navOpen.subscribe(navOpen => (this.navOpen = navOpen));
  }

  ngOnInit() {}
}
