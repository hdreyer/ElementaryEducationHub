import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WritingComponent } from "./writing.component";

describe("GrammarComponent", () => {
  let component: WritingComponent;
  let fixture: ComponentFixture<WritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WritingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
