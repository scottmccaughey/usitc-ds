import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styles: []
})
export class CodeComponent implements OnInit {
  @Input()
  language = 'scss';
  @Input()
  code = '';

  constructor() {}

  ngOnInit() {}
}
