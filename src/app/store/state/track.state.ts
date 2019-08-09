import { ITrack } from '../../models/track.interface';

export interface ITrackState {
  tracks: ITrack[];
  selectedTrack: ITrack;
}

export const initialTrackState: ITrackState = {
  tracks: null,
  selectedTrack: null
};
