import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionRoleImageComponent } from './champion-role-image.component';

describe('ChampionRoleImageComponent', () => {
  let component: ChampionRoleImageComponent;
  let fixture: ComponentFixture<ChampionRoleImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionRoleImageComponent]
    });
    fixture = TestBed.createComponent(ChampionRoleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
