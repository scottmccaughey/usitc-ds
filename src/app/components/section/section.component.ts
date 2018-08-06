import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styles: []
})
export class SectionComponent implements OnInit {
  @Input() section: object;
  content = {};

  constructor() {}

  ngOnInit() {
    const secSplit = this.section['referenceURI'].split('-');
    const depth = this.section['depth'] > 1 ? this.section['depth'] - 1 : 1;
    this.content['header'] = '<h' + depth + '>' + this.section['header'] + '</h' + depth + '>';
    this.content['description'] = this.section['description'];
    this.content['markupClass'] = 'kss-section-' + secSplit[1];
    this.content['markup'] = this.section['markup'];
    this.content['modifiers'] = this.section['modifiers'];
    this.content['parameters'] = this.section['parameters'];
    this.content['sourceFile'] = environment._devAssetsLocation + this.section['source']['filename'];
    this.content['sourceLine'] = this.section['source']['line'];
  }
}
