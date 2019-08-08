import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ITrackState } from '../state/track.state';

const selectTracks = (state: IAppState) => state.tracks;

export const selectTrackList = createSelector(
  selectTracks,
  (state: ITrackState) => state.tracks
);

export const selectSelectedTrack = createSelector(
  selectTracks,
  (state: ITrackState) => state.selectedTrack
);
