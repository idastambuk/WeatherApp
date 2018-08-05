import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BASE_URL, API_KEY } from '../../environments/environment';

import { CITIES_ARR } from './constants/city-info';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherAppService {

	constructor(
		private http: Http,
    ) { }
    

    //Get single city forecast

    getSingleCity(city_name) {
		return this.http.get(`${BASE_URL}weather?q=${city_name}&units=metric&APPID=${API_KEY}`)
			.map(res => (<Response>res).json())
			.catch((err: Response) => {
				return Observable.throw(err);
			});
	}

    //Get 5-day weather forecast for a city

    getFiveDayForecast(city_name) {
		return this.http.get(`${BASE_URL}forecast?q=${city_name}&units=metric&APPID=${API_KEY}`)
			.map(res => (<Response>res).json())
			.catch((err: Response) => {
				return Observable.throw(err.json());
			});
    }
    
    // Get initial dataf or the 5 cities

    getCities() {
        let cities = [];
        for (let city of CITIES_ARR) {
            this.getSingleCity(city.name)
                .subscribe(
                    res => {
                        cities.push(res);
                    }
                )
        }
        return cities;
    };
}
