import { Track } from '../../models/track.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RemoveTrack } from '../../store/actions/track.action';

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

  removeTrack(payload) {
    if (confirm("Are you sure to delete '" + payload.name + "'?")) {
      this.store.dispatch(new RemoveTrack(payload.id));
    }
  }
  navigateToTrack(id: string) {
    this.router.navigate(['track', id]);
  }
}
