import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdgradeComponent } from './thirdgrade.component';

describe('ThirdgradeComponent', () => {
  let component: ThirdgradeComponent;
  let fixture: ComponentFixture<ThirdgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
