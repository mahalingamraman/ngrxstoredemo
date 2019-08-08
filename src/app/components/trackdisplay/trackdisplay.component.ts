import { Component, OnInit} from '@angular/core';
import { Track } from '../../models/track.model';
import { AppState } from '../../app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-trackdisplay',
  templateUrl: './trackdisplay.component.html',
  styleUrls: ['./trackdisplay.component.css']
})
export class TrackdisplayComponent implements OnInit {
  tracks$: Observable<Track[]>;
  track$: Observable<Track>;
  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute,private router: Router) { 
    //this.tracks$ = this.store.pipe(select(state => state.track);
    //this.track = this.getCurrentValue();
    //this.activatedRoute.snapshot.params.id]
    console.log(this.store.select(appState => appState.track));
    
  }
  getCurrentValue(): Observable<number> {
    //return this.store.select(appState => appState.track);
  }
  ngOnInit() {
  }

}
