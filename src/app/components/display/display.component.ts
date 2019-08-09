import { ITrack } from '../../models/track.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RemoveTrack } from '../../store/actions/track.actions';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input()
  tracks: ITrack[];
  @Output()
  trackSelected: EventEmitter<number> = new EventEmitter();
  constructor(private store: Store<IAppState>, private router: Router) {
    // this.tracks = this.store.select(state => state.track);
   }
  ngOnInit() {
  }

  removeTrack(payload) {
    if (confirm("Are you sure to delete '" + payload.name + "'?")) {
     this.store.dispatch(new RemoveTrack(payload.id));
    }
  }
  navigateToTrack(id: number) {
    this.trackSelected.emit(id);
  }
}
