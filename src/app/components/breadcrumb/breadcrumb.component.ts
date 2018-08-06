import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: []
})
export class BreadcrumbComponent implements OnInit {
  @Input() section: object;
  breadcrumbs = [];

  constructor() {}

  ngOnInit() {
    const routeSplit = this.section['reference'].split('.');
    let crumbTrail = '';

    this.breadcrumbs.push({ name: 'Home', link: '/' });

    routeSplit.forEach((breadcrumb) => {
      crumbTrail += '/' + breadcrumb.toLowerCase();
      this.breadcrumbs.push({
        name: breadcrumb,
        link: crumbTrail
      });
    });
  }
}
