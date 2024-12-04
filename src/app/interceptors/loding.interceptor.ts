import { HttpInterceptorFn } from '@angular/common/http';
import { inject, NgZone } from '@angular/core';
import { LoadingService } from '../services/communication/loading.service';
import { finalize } from 'rxjs';

export const lodingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadService = inject(LoadingService);
  loadService.show();
  return next(req).pipe(
    finalize(() => {
      loadService.hide();
    })
  );
};
