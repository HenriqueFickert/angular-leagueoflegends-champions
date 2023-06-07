import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleContentComponent } from './role-content.component';

describe('RoleContentComponent', () => {
  let component: RoleContentComponent;
  let fixture: ComponentFixture<RoleContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleContentComponent]
    });
    fixture = TestBed.createComponent(RoleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
