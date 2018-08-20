import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styles: []
})
export class ParametersComponent implements OnInit {
  @Input()
  parameterVals: any;
  parameters = [];

  constructor() {}

  ngOnInit() {
    console.log(this.parameterVals);

    this.parameterVals.forEach(parameter => {
      const param = {};
      param['var'] = parameter['name'];
      param['value'] = parameter['description'];
      param['description'] = parameter['defaultValue'];
      if (parameter['name'].startsWith('$color-')) {
        param['color'] = true;
        param['style'] = { fill: parameter['defaultValue'] };
      }
      this.parameters.push(param);
    });
  }
}
