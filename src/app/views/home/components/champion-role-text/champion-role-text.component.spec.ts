import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionRoleTextComponent } from './champion-role-text.component';

describe('ChampionRoleTextComponent', () => {
  let component: ChampionRoleTextComponent;
  let fixture: ComponentFixture<ChampionRoleTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionRoleTextComponent]
    });
    fixture = TestBed.createComponent(ChampionRoleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
