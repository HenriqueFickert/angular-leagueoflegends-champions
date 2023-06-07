import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionContentComponent } from './champion-content.component';

describe('ChampionContentComponent', () => {
  let component: ChampionContentComponent;
  let fixture: ComponentFixture<ChampionContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionContentComponent]
    });
    fixture = TestBed.createComponent(ChampionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
