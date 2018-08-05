import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WeatherAppService } from '../../services/weather-app.service';
import { PassDailyService } from '../../services/pass-daily.service';
import { UtilsService } from '../../services/utils.service';

interface TemperaturesByDay {
	min_temp: number;
	max_temp: number;
	day_info: Object;
}
@Component({
	selector: 'nga-single-city',
	templateUrl: './single-city.html',
	styleUrls: ['./single-city.scss'],
})

export class SingleCityComponent implements OnInit{

	constructor(
	private weatherService: WeatherAppService,
        private router: Router, 
		private route: ActivatedRoute, 
		private passService: PassDailyService, 
		private utils: UtilsService
	) {}

	private city_name;
	private forecast_coll;

	forecast_matrix= [];

	forecast_median : Array<TemperaturesByDay> = [];

	selectedDay = [];

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.city_name = params['name'];
			this.getForecast();
		});
	}

	getForecast() {
		this.weatherService.getFiveDayForecast(this.city_name)
		.subscribe(
			response => {
			  	this.forecast_coll = response.list;
				this.forecastHandler();	
				this.medianForecastHandler();		
			},
			error => {
			  console.log(error.error_msg);
			},	
		)  
	}

	forecastHandler() {
		let date = this.utils.formatDate(this.forecast_coll[0].dt_txt);
		let index = 0;
		let temp_arr = [];
		for(let item of this.forecast_coll) {
			if (this.utils.formatDate(item.dt_txt) === date) {
				temp_arr.push(item);
			}
			else {
				this.forecast_matrix[index] = temp_arr;
				temp_arr = [];
				index++;
				date = this.utils.formatDate(item.dt_txt);
				temp_arr.push(item);
			}
		}
		this.forecast_matrix[index] = temp_arr;	
		this.passService.forecastMatrixComplete(this.forecast_matrix);
	}

	medianForecastHandler() {
		for(let arr of this.forecast_matrix) {
			
			//Min max temperature counter
			let temp_min = arr[0].main.temp;
			let temp_max = arr[0].main.temp;

			for (let item of arr) {
				if(item.main.temp < temp_min) {
					temp_min = item.main.temp;
				}
				else if(item.main.temp > temp_max) {
					temp_max = item.main.temp;
				}
			}
			///
			let index = Math.round(arr.length/2);

			let day = {
				min_temp: temp_min,
				max_temp: temp_max,
				day_info: arr[index]
			}
			this.forecast_median.push(day);

		}
		this.passService.dailyForecastComplete(this.forecast_median);
	}

	onNavigateToHourly(index) {
		this.selectedDay = [];
		this.selectedDay = [...this.forecast_matrix[index]];
        this.router.navigate([`/weather-app/${this.city_name}/${this.selectedDay[0].dt}`]);
	}
}

