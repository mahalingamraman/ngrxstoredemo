import { Track } from './../track/track.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  tracks: Observable<Track[]>;
  constructor(private store: Store<AppState>) {
    this.tracks = this.store.select(state => state.track);
   }
  ngOnInit() {
  }

}
