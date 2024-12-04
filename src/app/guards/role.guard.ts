import { inject } from '@angular/core';
import {
  CanActivateFn,
  createUrlTreeFromSnapshot,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/auth.selector';
import { map } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const user = store.select(selectUser);

  return user.pipe(
    map((user) => {
      const canDo = route.data['roles'].includes(user?.user.role);
      return canDo ? true : createUrlTreeFromSnapshot(route, ['login']);
    })
  );
};
