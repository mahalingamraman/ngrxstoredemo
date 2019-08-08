import { Track } from './../track/track.model';
import { Actions, ADD_TRACK, REMOVE_TRACK } from '../actions/track.action';

export function addTrackReducer(state: Track[] = [], action: Actions) {
  switch (action.type) {
    case ADD_TRACK:
        return [...state, action.payload];
    case REMOVE_TRACK:
        return state.filter(({ id }) => id !== action.id);
    default:
        return state;
    }
}