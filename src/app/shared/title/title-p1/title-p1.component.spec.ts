import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleP1Component } from './title-p1.component';

describe('TitleP1Component', () => {
  let component: TitleP1Component;
  let fixture: ComponentFixture<TitleP1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleP1Component]
    });
    fixture = TestBed.createComponent(TitleP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
