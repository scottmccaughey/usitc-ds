import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  currentYear;
  appVersion = require('../../../../package.json').version;

  constructor() {}

  ngOnInit() {
    this.currentYear = new Date();
  }
}
