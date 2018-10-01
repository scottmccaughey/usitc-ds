import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon',
  template: `
    <svg>
      <use attr.xlink:href="/assets/icons/symbol/icons.svg#{{this.name}}"></use>
    </svg>
  `
})
export class IconComponent implements OnInit {
  @Input()
  name: string;

  constructor() {}

  ngOnInit() {}
}
