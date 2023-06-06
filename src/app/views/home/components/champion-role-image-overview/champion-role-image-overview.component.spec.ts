import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionRoleImageOverviewComponent } from './champion-role-image-overview.component';

describe('ChampionRoleImageOverviewComponent', () => {
  let component: ChampionRoleImageOverviewComponent;
  let fixture: ComponentFixture<ChampionRoleImageOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionRoleImageOverviewComponent]
    });
    fixture = TestBed.createComponent(ChampionRoleImageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
