import { Injectable, EventEmitter } from '@angular/core';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject, BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable()
export class PassDailyService {

	constructor(
    ) { }

    medianForecast = [];

    forecast_daily = [];

    index;

    private forecastMatrix:Subject<any> = new BehaviorSubject<any>([]);
    forecastMatrix$ = this.forecastMatrix.asObservable();

    private forecastDaily:Subject<any> = new BehaviorSubject<any>([]);
    forecastDaily$ = this.forecastDaily.asObservable();


    forecastMatrixComplete(data) {
        this.forecastMatrix.next(data);
    }

    dailyForecastComplete(data) {	
        this.forecastDaily.next(data);
    }

}
