import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { trackReducers } from './track.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  tracks: trackReducers
};
