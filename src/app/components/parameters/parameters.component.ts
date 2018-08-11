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
    this.parameterVals.forEach(parameter => {
      const param = {};
      param['color'] = false;
      if (parameter['name'].startsWith('$color-')) {
        param['color'] = true;
        param['style'] = { 'background-color': parameter['defaultValue'] };
        param['var'] = parameter['name'];
        param['value'] = parameter['description'];
      }

      this.parameters.push(param);
    });
  }
}
