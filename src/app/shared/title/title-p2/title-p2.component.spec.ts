import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleP2Component } from './title-p2.component';

describe('TitleP2Component', () => {
  let component: TitleP2Component;
  let fixture: ComponentFixture<TitleP2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleP2Component]
    });
    fixture = TestBed.createComponent(TitleP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
