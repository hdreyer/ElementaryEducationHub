import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthgradeComponent } from './fourthgrade.component';

describe('FourthgradeComponent', () => {
  let component: FourthgradeComponent;
  let fixture: ComponentFixture<FourthgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
