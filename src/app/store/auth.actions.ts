import { createAction, props } from '@ngrx/store';
import { Actions } from './actions.enum';
import { AuthenticatedUser } from '../models/authenticatedUser.model';

export const setUser = createAction(
  Actions.SET_USER,
  props<{ user: AuthenticatedUser }>()
);
