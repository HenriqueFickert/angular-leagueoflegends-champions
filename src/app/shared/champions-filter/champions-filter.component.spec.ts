import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsFilterComponent } from './champions-filter.component';

describe('ChampionsFilterComponent', () => {
  let component: ChampionsFilterComponent;
  let fixture: ComponentFixture<ChampionsFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionsFilterComponent]
    });
    fixture = TestBed.createComponent(ChampionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
