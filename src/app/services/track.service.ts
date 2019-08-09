import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ITrackHttp } from '../models/track-http.interface';

@Injectable()
export class TrackService {
  tracksUrl = `${environment.apiUrl}tracks`;

  constructor(private http: HttpClient) { }

  getTracks(): Observable<ITrackHttp> {
    return this.http.get<ITrackHttp>(this.tracksUrl);
  }
}
