import { RouterReducerState } from '@ngrx/router-store';

import { ITrackState, initialTrackState } from './track.state';


export interface IAppState {
  router?: RouterReducerState;
  tracks: ITrackState;
}

export const initialAppState: IAppState = {
  tracks: initialTrackState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
