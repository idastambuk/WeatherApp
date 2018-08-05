import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassDailyService } from '../../../services/pass-daily.service';

import { UtilsService } from '../../../services/utils.service';


@Component({
	selector: 'nga-hourly-weather',
	templateUrl: './hourly-weather.html',
	styleUrls: ['./hourly-weather.scss']
})

export class HourlyWeatherComponent {

	
	constructor(
		private passService: PassDailyService,
		private route:ActivatedRoute,
		private utils: UtilsService
	) {
		this.passService.forecastMatrix$.subscribe(
			arr => {
				this.hourlyDataMulti = arr;
				this.getParams();
			}
		)
	}

	params_date;

	hourlyDataMulti = [];

	hourlyDataSingle = [];
	index;

	getParams() {
		this.route.params.subscribe(params => {
			this.params_date = params['day'];
			this.hourlyHandler();
		});
	}

	hourlyHandler() {
		for (let item of this.hourlyDataMulti) {
			if(this.utils.formatDate(item[0].dt_txt) === this.params_date) {
				this.hourlyDataSingle = [...item];
			}
		}
	}
}

