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
      param['color'] = false;
      if (parameter['name'].startsWith('$color-')) {
        param['color'] = true;
        param['style'] = { 'background-color': parameter['defaultValue'] };
        param['var'] = parameter['name'];
        param['value'] = parameter['description'];
      } else if (parameter['name'].startsWith('$font-')) {
        param['font'] = true;
        param['var'] = parameter['name'];
        param['value'] = parameter['description'];
        param['descripton'] = parameter['defaultValue'];
      }
      this.parameters.push(param);
    });
  }
}
