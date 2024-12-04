import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let isLogged = sessionStorage.getItem('TOKEN');
  if (!!isLogged) {
    return true;
  }
  router.navigate(['login']);
  return false;
};
