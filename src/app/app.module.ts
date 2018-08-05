import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WeatherAppService } from './services/weather-app.service';
import { WeatherAppModule } from './weather-app/weather-app.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { UtilsService } from './services/utils.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    WeatherAppModule, 
    HttpModule,
  ],
  providers: [
    WeatherAppService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
