import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueoflegendsLogoComponent } from './leagueoflegends-logo.component';

describe('LeagueoflegendsLogoComponent', () => {
  let component: LeagueoflegendsLogoComponent;
  let fixture: ComponentFixture<LeagueoflegendsLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueoflegendsLogoComponent]
    });
    fixture = TestBed.createComponent(LeagueoflegendsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
