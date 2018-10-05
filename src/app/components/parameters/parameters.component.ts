import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-parameters',
  templateUrl: './parameters.component.html',
  styles: []
})
export class ParametersComponent implements OnInit {
  @Input()
  parameterVals: any;
  parameters = [];

  constructor() {}

  ngOnInit() {
    this.parameterVals.forEach(parameter => {
      const param = {};
      param['var'] = parameter['name'];
      param['value'] = parameter['defaultValue'];
      param['description'] = parameter['description'];
      if (parameter['name'].startsWith('$color-')) {
        param['color'] = true;
        param['style'] = { fill: param['description'] };
      }
      this.parameters.push(param);
    });
  }
}
