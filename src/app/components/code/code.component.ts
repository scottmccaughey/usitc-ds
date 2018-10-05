import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-code',
  templateUrl: './code.component.html',
  styles: []
})
export class CodeComponent implements OnInit {
  @Input()
  language = 'markup';
  @Input()
  code = '';

  constructor() {}

  ngOnInit() {}
}
