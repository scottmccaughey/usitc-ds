import { Component, OnInit } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'ds-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  navOpen;

  constructor(public config: ConfigService) {
    this.config.navOpen.subscribe(navOpen => (this.navOpen = navOpen));
  }

  ngOnInit() {}
}
