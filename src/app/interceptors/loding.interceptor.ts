import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/communication/loading.service';
import { finalize } from 'rxjs';

export const lodingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadService = inject(LoadingService);
  loadService.show();
  console.log('entrou');

  setTimeout(() => {
    loadService.hide();
  }, 3000);
  return next(req);
};
