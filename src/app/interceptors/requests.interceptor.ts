import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/auth.selector';

export const requestsInterceptor: HttpInterceptorFn = (req, next) => {
  // const token = sessionStorage.getItem('TOKEN');
  const store = inject(Store);
  const router = inject(Router);
  const user$ = store.select(selectUser);
  let token;
  user$.subscribe((result) => {
    token = result?.token;
  });

  if (req.url.includes('auth')) {
    return next(req);
  }
  if (token !== null) {
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(newReq);
  }

  router.navigate(['/login']);
  return next(req);
};
