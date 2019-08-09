import { Component, OnInit, Input } from '@angular/core';

import { ITrack } from '../../models/track.interface';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit {
  @Input()
  track: ITrack;

  constructor() {}

  ngOnInit() {}
}
