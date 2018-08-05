import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SingleCityComponent } from './single-city/single-city.component';
import { HourlyWeatherComponent } from './single-city/hourly-weather/hourly-weather.component';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { routing } from './weather-app.routing';
import { WeatherAppComponent } from './weather-app.component';
import { CommonModule } from '@angular/common';
import { WeatherAppService } from '../services/weather-app.service';
import { DailyForecastComponent } from './single-city/daily-forecast/daily-forecast.component';
import { PassDailyService } from '../services/pass-daily.service';



@NgModule({
	imports: [
		routing,
		CommonModule,
		FormsModule
	],
	declarations: [
		WeatherAppComponent,
		SingleCityComponent, 
		HourlyWeatherComponent, 
		AllCitiesComponent, 
		DailyForecastComponent
    ],
    providers: [
		 WeatherAppService, 
		 PassDailyService
    ]
})
export class WeatherAppModule {}
