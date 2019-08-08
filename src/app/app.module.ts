import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackComponent } from './components/track/track.component';
import { StoreModule } from '@ngrx/store';
import { addTrackReducer } from './store/reducers/track.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './components/display/display.component';
import { TrackdisplayComponent } from './components/trackdisplay/trackdisplay.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    DisplayComponent,
    TrackdisplayComponent
  ],
  imports: [
    BrowserModule,
	  StoreModule.forRoot({track: addTrackReducer}),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
