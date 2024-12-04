import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/auth.selector';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);
  const user = store.select(selectUser);
  let isLogged;
  user.subscribe((result) => (isLogged = result?.token));

  if (!!isLogged) {
    return true;
  }
  router.navigate(['login']);
  return false;
};
