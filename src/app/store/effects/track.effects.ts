import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetTracksSuccess,
  ETrackActions,
  GetTrackSuccess,
  GetTrack,
  GetTracks
} from '../actions/track.actions';
import { TrackService } from '../../services/track.service';
import { ITrackHttp } from '../../models/track-http.interface';
import { selectTrackList } from '../selectors/track.selector';

@Injectable()
export class TrackEffects {
  @Effect()
  getTrack$ = this.actions$.pipe(
    ofType<GetTrack>(ETrackActions.GetTrack),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectTrackList))),
    switchMap(([id, tracks]) => {
      const selectedTrack = tracks.filter(track => track.id === +id)[0];
      console.log(selectedTrack);
      return of(new GetTrackSuccess(selectedTrack));
    })
  );

  @Effect()
  getTracks$ = this.actions$.pipe(
    ofType<GetTracks>(ETrackActions.GetTracks),
    switchMap(() => this.trackService.getTracks()),
    switchMap((trackHttp: ITrackHttp) => { 
      return of(new GetTracksSuccess(trackHttp))
    })
  );

  constructor(
    private trackService: TrackService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }
}
