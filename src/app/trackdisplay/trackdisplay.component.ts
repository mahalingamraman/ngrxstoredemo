import { Component, OnInit} from '@angular/core';
import { Track } from '../track/track.model';
import { AppState } from './../app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trackdisplay',
  templateUrl: './trackdisplay.component.html',
  styleUrls: ['./trackdisplay.component.css']
})
export class TrackdisplayComponent implements OnInit {
  track: Observable<Track[]>;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) { 
    this.track = this.store.select(state => state.track.filter(({ id }) => id === this.route.snapshot.params.id));
    console.log(this.route.snapshot.params.id,this.track);
    //this.track = this.tracks.filter(({ id }) => id === this.route.snapshot.params.id);
  }

  ngOnInit() {
  }

}
