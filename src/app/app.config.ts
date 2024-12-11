import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), // RouterModule.forRoot(routes)
    provideHttpClient(), provideAnimationsAsync(),

    // useClass // => vytvori instanci tridy
    // useValue // => vrati nejakou hodnotu
    // useExisting // => pouzije jiz existujici instanci tridy nejake servisy
    // useFactory // => vytvari instanci v runtime 
  ]
};
