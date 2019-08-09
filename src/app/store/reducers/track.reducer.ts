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
      console.log(action.payload);
      return {
        ...state,
        selectedTrack: action.payload
      };
    }
    case ETrackActions.ADD_TRACK: {
      state.tracks.push(action.payload);
      return state;
    }
    case ETrackActions.REMOVE_TRACK: {
      console.log(state.tracks,action)
      state.tracks.filter(({ id }) => id !== action.id);
      console.log(state.tracks);
      return state;
    }
    default:
      return state;
  }
};
