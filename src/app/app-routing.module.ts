import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackdisplayComponent } from './components/trackdisplay/trackdisplay.component';
import { TrackComponent } from './components/track/track.component';
const routes: Routes = [
  { path: 'tracks', component: TrackComponent },
  { path: 'track/:id', component: TrackdisplayComponent },
  { path: '', redirectTo: '/tracks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
