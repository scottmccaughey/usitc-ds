import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'ds-styleguide',
  templateUrl: './styleguide.component.html',
  styles: []
})
export class StyleguideComponent implements OnInit {
  kss: object;
  route: string;
  slug: string;
  section = {};
  depth: number;
  subSections = [];
  subSectionLinks = [];

  content = {};

  constructor(private config: ConfigService) {
    this.config.kss.subscribe(kss => (this.kss = kss));
    this.config.route.subscribe(route => (this.route = route));
  }

  ngOnInit() {
    this.slug = this.route.substr(1).replace(/\//g, '-');
    this.kss['sections'].forEach(section => {
      if (section.referenceURI === this.slug) {
        this.section = section;
        this.depth = section.depth - 1;

        if (this.depth === 0) {
          this.getSubSectionLinks(section);
        }

        if (this.depth === 1) {
          this.getSubSections(section);
        }
      }
    });
  }

  getSubSectionLinks(section) {
    const secSplit = section.referenceURI.split('-');
    this.kss['sections'].forEach(sec => {
      const sectionSplit = sec.referenceURI.split('-');
      if (sectionSplit[0] === secSplit[0] && sectionSplit[1] && !sectionSplit[2]) {
        sec['url'] = '/' + sec.referenceURI.replace(/-/g, '/');
        this.subSectionLinks.push(sec);
      }
    });
  }

  getSubSections(section) {
    const secSplit = section.referenceURI.split('-');
    this.kss['sections'].forEach(sec => {
      const sectionSplit = sec.referenceURI.split('-');
      if (sectionSplit[0] === secSplit[0] && sectionSplit[1] === secSplit[1] && sectionSplit[2]) {
        this.subSections.push(sec);
      }
    });
  }
}
