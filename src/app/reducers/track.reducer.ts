import { Track } from './../track/track.model';
import { Action } from '@ngrx/store';

export const ADD_TRACK = 'ADD_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export function addTrackReducer(state: Track[] = [], action) {
  switch (action.type) {
    case ADD_TRACK:
        return [...state, action.payload];
    case REMOVE_TRACK:
        return state.filter(({ id }) => id !== action.payload.id);
    default:
        return state;
    }
}