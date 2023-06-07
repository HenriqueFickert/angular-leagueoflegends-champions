import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnShowMoreComponent } from './btn-show-more.component';

describe('BtnShowMoreComponent', () => {
  let component: BtnShowMoreComponent;
  let fixture: ComponentFixture<BtnShowMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnShowMoreComponent]
    });
    fixture = TestBed.createComponent(BtnShowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
