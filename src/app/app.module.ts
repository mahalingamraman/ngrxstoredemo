import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ReactiveFormsModule } from '@angular/forms';

import { appReducers } from './store/reducers/app.reducer';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { TrackEffects } from './store/effects/track.effects';
import { AppComponent } from './app.component';
import { TrackService } from './services/track.service';

import { TrackComponent } from './components/track/track.component';
import { DisplayComponent } from './components/display/display.component';
import { TrackdisplayComponent } from './components/trackdisplay/trackdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    DisplayComponent,
    TrackdisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    ReactiveFormsModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TrackEffects]),
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
