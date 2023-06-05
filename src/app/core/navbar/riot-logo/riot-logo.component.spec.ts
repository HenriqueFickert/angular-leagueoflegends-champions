import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiotLogoComponent } from './riot-logo.component';

describe('RiotLogoComponent', () => {
  let component: RiotLogoComponent;
  let fixture: ComponentFixture<RiotLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiotLogoComponent]
    });
    fixture = TestBed.createComponent(RiotLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
