import { Track } from './models/track.model';

export interface AppState {
  readonly track: Track[];
  selectedTrack: Track;
}