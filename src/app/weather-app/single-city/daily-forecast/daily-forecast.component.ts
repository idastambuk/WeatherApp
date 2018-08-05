import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PassDailyService } from '../../../services/pass-daily.service';
import { UtilsService } from '../../../services/utils.service';


@Component({
	selector: 'nga-daily-forecast',
	templateUrl: './daily-forecast.html',
	styleUrls: ['./daily-forecast.scss']
})

export class DailyForecastComponent {

	constructor(
        private router: Router, 
		private route: ActivatedRoute, 
		private passService: PassDailyService, 
		private utils: UtilsService
	) {
		this.passService.forecastDaily$.subscribe(
			arr => {
				this.forecastMedian = arr;
				if (this.forecastMedian.length > 5) {
					this.forecastMedian.splice(0,1);
				}
			}
		)
	}
	
	forecastMedian = [];

	onShowHourly(d) {
		let date = this.utils.formatDate(d);
        this.router.navigate([date], {relativeTo: this.route});	
	}
}

