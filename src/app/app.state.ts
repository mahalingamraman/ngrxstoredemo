import { ITrack } from './models/track.interface';

export interface AppState {
  readonly track: ITrack[];
  selectedTrack: ITrack;
}