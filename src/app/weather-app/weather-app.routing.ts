import { Routes, RouterModule } from '@angular/router';
import { WeatherAppComponent } from './weather-app.component';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { HourlyWeatherComponent } from './single-city/hourly-weather/hourly-weather.component';
import { DailyForecastComponent } from './single-city/daily-forecast/daily-forecast.component';
import { SingleCityComponent } from './single-city/single-city.component';

const routes: Routes = [
    {
		path: 'weather-app',
		component:WeatherAppComponent,
		children: [
            { path: '', redirectTo: 'all-cities', pathMatch: 'full' },
            { path: 'all-cities', component: AllCitiesComponent },
			{ path: ':name', component: SingleCityComponent, 
				children: [
					{ path: '', component: DailyForecastComponent},
					{ path: ':day', component: HourlyWeatherComponent }]
			}
		],
	},
];

export const routing = RouterModule.forChild(routes);
