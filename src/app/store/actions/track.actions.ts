/*import { Action } from '@ngrx/store';
import { Track } from '../models/track.model';

export const ADD_TRACK = 'Add_Track';
export const REMOVE_TRACK = 'Remove_Track';

export class AddTrack implements Action {
  readonly type = ADD_TRACK;

  constructor(public payload: Track) { }
}

export class RemoveTrack implements Action {
  readonly type = REMOVE_TRACK;

  constructor(public id: string) { }
}

export type Actions = AddTrack | RemoveTrack;*/

import { Action } from '@ngrx/store';

import { ITrack } from '../../models/track.interface';

export enum ETrackActions {
  GetTracks = '[Track] Get Tracks',
  GetTracksSuccess = '[Track] Get Tracks Success',
  GetTrack = '[Track] Get Track',
  GetTrackSuccess = '[Track] Get Track Success',
  ADD_TRACK = 'Add_Track',
  REMOVE_TRACK = 'Remove_Track'
}

export class GetTracks implements Action {
  public readonly type = ETrackActions.GetTracks;
}

export class GetTracksSuccess implements Action {
  public readonly type = ETrackActions.GetTracksSuccess;
  constructor(public payload: ITrack[]) { }
}

export class GetTrack implements Action {
  public readonly type = ETrackActions.GetTrack;
  constructor(public payload: number) { }
}

export class GetTrackSuccess implements Action {
  public readonly type = ETrackActions.GetTrackSuccess;
  constructor(public payload: ITrack) { }
}
export class AddTrack implements Action {
  public readonly type = ETrackActions.ADD_TRACK;
  constructor(public payload: ITrack) { }
}

export class RemoveTrack implements Action {
  public readonly type = ETrackActions.REMOVE_TRACK;
  constructor(public id: string) { }
}

export type TrackActions = GetTracks | GetTracksSuccess | GetTrack | GetTrackSuccess | AddTrack | RemoveTrack;

