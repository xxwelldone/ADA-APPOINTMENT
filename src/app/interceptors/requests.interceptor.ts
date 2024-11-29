import { HttpInterceptorFn } from '@angular/common/http';

export const requestsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
