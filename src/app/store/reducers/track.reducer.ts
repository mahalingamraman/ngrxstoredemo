/*import { TrackActions } from '../actions/track.actions';
import { ETrackActions } from './../actions/track.actions';

import { initialTrackState, ITrackState } from '../state/track.state';

export const trackReducers = (state = initialTrackState, action: TrackActions): ITrackState => {
  switch (action.type) {
    case ETrackActions.ADD_TRACK:
        return state; //[...state, action.payload];
    case ETrackActions.REMOVE_TRACK:
        return state; // .filter(({ id }) => id !== action.id);
    case ETrackActions.GetTracksSuccess: {
      return {
        ...state,
        tracks: action.payload
      };
    }
    case ETrackActions.GetTrackSuccess: {
      return {
        ...state,
        selectedTrack: action.payload
      };
    }
    default:
        return state;
    }
}*/
import { ETrackActions } from './../actions/track.actions';
import { TrackActions } from '../actions/track.actions';
import { initialTrackState, ITrackState } from '../state/track.state';

export const trackReducers = (
  state = initialTrackState,
  action: TrackActions
): ITrackState => {
  switch (action.type) {
    case ETrackActions.GetTracksSuccess: {
      return {
        ...state,
        tracks: action.payload
      };
    }
    case ETrackActions.GetTrackSuccess: {
      return {
        ...state,
        selectedTrack: action.payload
      };
    }

    default:
      return state;
  }
};
