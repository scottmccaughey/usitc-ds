import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styles: []
})
export class IconsComponent implements OnInit {
  @Input()
  icons: any;

  constructor() {}

  ngOnInit() {}
}
