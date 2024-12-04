import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { requestsInterceptor } from './interceptors/requests.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './store/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([requestsInterceptor])),
    provideEnvironmentNgxMask(),
    provideAnimationsAsync(),
    provideStore(),
    importProvidersFrom(
      StoreModule.forRoot({
        user: userReducer,
      }),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      })
    ),
  ],
};
