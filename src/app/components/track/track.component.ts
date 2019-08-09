import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddTrack } from '../../store/actions/track.actions';
import { IAppState } from '../../store/state/app.state';
import { selectTrackList } from '../../store/selectors/track.selector';
import { GetTracks } from './../../store/actions/track.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  angForm: FormGroup;
  tracks$ = this.store.pipe(select(selectTrackList));
  constructor(private store: Store<IAppState>, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      track_id: ['', Validators.required ],
      track_name: ['', Validators.required ]
   });
  }
  addTrack(id, name) {
    this.store.dispatch(new AddTrack({
      id: id,
      name: name
    }));
    this.angForm.reset();
  }
  ngOnInit() {
    this.store.dispatch(new GetTracks());
  }
  navigateToTrack(id: number) {
    this.router.navigate(['track', id]);
  }

}
