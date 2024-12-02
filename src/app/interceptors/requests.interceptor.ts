import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const requestsInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('TOKEN');
  const router = inject(Router);

  if (req.url.includes('auth')) {
    console.log('Não precisa de token');
    return next(req);
  }
  if (token !== null) {
    console.log('Tem Token');

    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(newReq);
  }
  console.log('Não tem token');
  router.navigate(['/login']);
  return next(req);
};
