import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackComponent } from './track/track.component';
import { StoreModule } from '@ngrx/store';
import { addTrackReducer } from './reducers/track.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
	StoreModule.forRoot({track: addTrackReducer}),
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
