import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthgradeComponent } from './fifthgrade.component';

describe('FifthgradeComponent', () => {
  let component: FifthgradeComponent;
  let fixture: ComponentFixture<FifthgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
