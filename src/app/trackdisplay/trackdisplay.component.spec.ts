import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackdisplayComponent } from './trackdisplay.component';

describe('TrackdisplayComponent', () => {
  let component: TrackdisplayComponent;
  let fixture: ComponentFixture<TrackdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
