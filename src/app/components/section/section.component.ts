import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styles: []
})
export class SectionComponent implements OnInit {
  @Input()
  section: object;

  constructor() {}

  ngOnInit() {
    console.log(this.section);
    const secSplit = this.section['referenceURI'].split('-');
    const depth = this.section['depth'] > 1 ? this.section['depth'] - 1 : 1;
    this.section['name'] = '<h' + depth + '>' + this.section['header'] + '</h' + depth + '>';
    this.section['markupClass'] = 'kss-section-' + secSplit[1];
    this.section['source']['file'] =
      environment._devAssetsLocation + this.section['source']['filename'];
    this.section['showSource'] = false;
    if (
      this.section['colors'].length > 0 ||
      this.section['modifiers'].length > 0 ||
      this.section['parameters'].length > 0 ||
      this.section['markup']
    ) {
      this.section['showSource'] = true;
    }
  }
}
