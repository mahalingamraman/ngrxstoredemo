import { Action } from '@ngrx/store';
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

export type Actions = AddTrack | RemoveTrack;
