import { Track } from '../../models/track.model';

export interface ITrackState {
  tracks: Track[];
  selectedTrack: Track;
}

export const initialUserState: ITrackState = {
  tracks: null,
  selectedTrack: null
};
