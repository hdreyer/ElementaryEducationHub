import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialneedsComponent } from './specialneeds.component';

describe('SpecialneedsComponent', () => {
  let component: SpecialneedsComponent;
  let fixture: ComponentFixture<SpecialneedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialneedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialneedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
