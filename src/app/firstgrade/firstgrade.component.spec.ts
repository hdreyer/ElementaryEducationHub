import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstgradeComponent } from './firstgrade.component';

describe('FirstgradeComponent', () => {
  let component: FirstgradeComponent;
  let fixture: ComponentFixture<FirstgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
