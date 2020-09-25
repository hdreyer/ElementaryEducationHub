import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeFrameComponent } from './youtube-frame.component';

describe('YoutubeFrameComponent', () => {
  let component: YoutubeFrameComponent;
  let fixture: ComponentFixture<YoutubeFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
