import { Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { IAppState } from '../../store/state/app.state';
import { selectSelectedTrack } from '../../store/selectors/track.selector';
import { GetTrack } from '../../store/actions/Track.actions';

@Component({
  selector: 'app-trackdisplay',
  templateUrl: './trackdisplay.component.html',
  styleUrls: ['./trackdisplay.component.css']
})
export class TrackdisplayComponent implements OnInit {
  track$ = this._store.pipe(select(selectSelectedTrack));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetTrack(this._route.snapshot.params.id));
  }
}
