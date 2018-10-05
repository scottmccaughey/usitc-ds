import { Component, Input, OnInit } from '@angular/core';

import { mostReadable, readability, TinyColor } from '@ctrl/tinycolor';

@Component({
  selector: 'ds-colors',
  templateUrl: './colors.component.html',
  styles: []
})
export class ColorsComponent implements OnInit {
  @Input()
  colorVals: any;
  lums = [50, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95];
  colors = [];

  constructor() {}

  ngOnInit() {
    this.colorVals.forEach(color => {
      const clr = {};
      const hsl = color.color.substr(4).slice(0, -1);
      const hslArr = hsl.split(', ');
      clr['name'] = color.name.substr(1);
      clr['description'] = color['description'];
      clr['hue'] = hslArr[0];
      clr['saturation'] = hslArr[1];
      clr['lightness'] = hslArr[2];
      clr['colorInfo'] = [];

      clr['lums'] = this.lums;
      if (clr['name'] === 'black') {
        clr['lums'] = [0];
      } else if (clr['name'] === 'white') {
        clr['lums'] = [100];
      }

      clr['lums'].forEach(lum => {
        const obj = {};
        const hslObj = 'hsl(' + hslArr[0] + ', ' + hslArr[1] + ', ' + lum + ')';
        obj['lum'] = lum;
        obj['hex'] = new TinyColor(hslObj).toHexString();
        obj['textHex'] = mostReadable(obj['hex'], ['#ffffff', '#323334']).toHexString();
        obj['style'] = {
          'background-color': obj['hex'],
          color: obj['textHex']
        };
        obj['ratio'] = Math.round(readability(obj['hex'], obj['textHex']) * 100) / 100;
        obj['score'] = 'dnp';

        if (obj['ratio'] >= 7) {
          obj['score'] = 'aaa';
        } else if (obj['ratio'] >= 4.5) {
          obj['score'] = 'aa';
        } else if (obj['ratio'] >= 3) {
          obj['score'] = 'aa18';
        }

        clr['colorInfo'].push(obj);
      });

      this.colors.push(clr);
    });
  }
}
