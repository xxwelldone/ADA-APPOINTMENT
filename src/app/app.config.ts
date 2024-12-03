import { ApplicationConfig } from '@angular/core';
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
import { lodingInterceptor } from './interceptors/loding.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([requestsInterceptor, lodingInterceptor])
    ),
    provideEnvironmentNgxMask(),
    provideAnimationsAsync(),
  ],
};
