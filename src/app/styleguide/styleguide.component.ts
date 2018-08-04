import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
	selector: 'app-styleguide',
	templateUrl: './styleguide.component.html',
	styles: []
})
export class StyleguideComponent implements OnInit {
	content: any;

	constructor(public _api: ApiService) {}

	ngOnInit() {
		this._api.loadData('/assets/styleguide/kss.json').subscribe((res) => {
			console.log(res);
			this.content = res;
		});
	}
}
