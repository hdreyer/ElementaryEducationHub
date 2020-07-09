import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondgradeComponent } from './secondgrade.component';

describe('SecondgradeComponent', () => {
  let component: SecondgradeComponent;
  let fixture: ComponentFixture<SecondgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
