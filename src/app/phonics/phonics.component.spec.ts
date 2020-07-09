import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicsComponent } from './phonics.component';

describe('PhonicsComponent', () => {
  let component: PhonicsComponent;
  let fixture: ComponentFixture<PhonicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
