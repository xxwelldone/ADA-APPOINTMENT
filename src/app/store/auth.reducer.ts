import { createReducer, on } from '@ngrx/store';

import { setUser } from './auth.actions';
import { AuthenticatedUser } from '../models/authenticatedUser.model';

export interface UserState {
  user: AuthenticatedUser | null;
}

export const initialState: UserState = { user: null };

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({
    ...state,
    user,
  }))
);
