import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherAppService } from '../../services/weather-app.service';
import { UtilsService } from '../../services/utils.service';


@Component({
	selector: 'nga-all-cities',
	templateUrl: './all-cities.html',
	styleUrls: ['./all-cities.scss']
})

export class AllCitiesComponent implements OnInit{

	
	constructor(
        private weatherService: WeatherAppService,
        private router: Router,
        private utils:UtilsService
	) {
    }
    
    private cities = [];

	ngOnInit() {    
        this.cities = this.weatherService.getCities();
    }
    
    onShowCity(name) {
        this.router.navigate([`/weather-app/${name}`]);
    }
}

