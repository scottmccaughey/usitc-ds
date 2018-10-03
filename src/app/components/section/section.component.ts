import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styles: []
})
export class SectionComponent implements OnInit {
  @Input()
  section: any;

  constructor() {}

  ngOnInit() {
    const secSplit = this.section.referenceURI.split('-');
    const depth = this.section.depth > 1 ? this.section.depth - 1 : 1;
    this.section.name = '<h' + depth + '>' + this.section.header + '</h' + depth + '>';
    this.section.source.file = environment._devAssetsLocation + this.section.source.filename;
    this.section.showSource = false;

    this.section.markupClass = 'kss-section-' + secSplit[1];
    if (depth > 1) {
      this.section.markupClass += ' kss-section-' + secSplit[2];
    }
    if (depth > 2) {
      this.section.markupClass += ' kss-section-' + secSplit[3];
    }

    if (this.section.markup && this.section.markup.startsWith('SCSS')) {
      this.section.scss = true;
      this.section.scssSrc = this.section.markup.substr(6);
    } else if (this.section.markup && this.section.markup.startsWith('Icons')) {
      this.section.icons = true;
      this.section.iconsArray = this.section.markup.substr(7).split('\n');
    } else if (this.section.markup && this.section.markup.startsWith('Source')) {
      this.section.sourceFlag = true;
      this.section.markup = '';
    }

    if (
      this.section.colors.length > 0 ||
      this.section.modifiers.length > 0 ||
      this.section.parameters.length > 0 ||
      this.section.markup ||
      this.section.sourceFlag
    ) {
      this.section.showSource = true;
    }

    console.log(this.section);
  }
}
