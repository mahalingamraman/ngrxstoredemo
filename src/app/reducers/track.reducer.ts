import { Track } from './../track/track.model';
import { Action } from '@ngrx/store';

export const ADD_TRACK = 'ADD_TRACK';

export function addTrackReducer(state: Track[] = [], action) {
  switch (action.type) {
    case ADD_TRACK:
        return [...state, action.payload];
    default:
        return state;
    }
}