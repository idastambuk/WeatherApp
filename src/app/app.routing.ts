import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'weather-app', pathMatch: 'full' },
  { path: '**', redirectTo: '/weather-app' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
