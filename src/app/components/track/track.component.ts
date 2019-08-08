import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { AddTrack } from '../../store/actions/track.action';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  angForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) { 
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
  }

}
