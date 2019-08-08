import { Track } from './../track/track.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  tracks: Observable<Track[]>;
  trackSelected: EventEmitter<number> = new EventEmitter();
  constructor(private store: Store<AppState>, private router: Router) {
    this.tracks = this.store.select(state => state.track);
   }
  ngOnInit() {
  }

  removeTrack(id) {
    this.store.dispatch({
      type: 'REMOVE_TRACK',
      payload: <Track>{
        id: id
      }
    });
  }
  navigateToTrack(id: number) {
    this.router.navigate(['track', id]);
  }
}
