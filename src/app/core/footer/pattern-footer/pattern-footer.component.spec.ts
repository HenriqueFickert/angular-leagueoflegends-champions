import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternFooterComponent } from './pattern-footer.component';

describe('PatternFooterComponent', () => {
  let component: PatternFooterComponent;
  let fixture: ComponentFixture<PatternFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatternFooterComponent]
    });
    fixture = TestBed.createComponent(PatternFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
