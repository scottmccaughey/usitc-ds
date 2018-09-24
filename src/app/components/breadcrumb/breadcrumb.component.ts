import { Component, Input, OnInit } from '@angular/core';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: []
})
export class BreadcrumbComponent implements OnInit {
  @Input()
  section: any;
  breadcrumbs = [];

  constructor(private config: ConfigService) {}

  ngOnInit() {
    const routeSplit = this.section.reference.split('.');
    let crumbTrail = '';

    this.breadcrumbs.push({ name: 'Home', link: '/' });

    routeSplit.forEach(breadcrumb => {
      crumbTrail += '/' + breadcrumb.toLowerCase();
      this.breadcrumbs.push({
        name: this.config.unCamelCase(breadcrumb),
        link: crumbTrail
      });
    });

    this.breadcrumbs[this.breadcrumbs.length - 1]['name'] = this.section.header;
  }
}
