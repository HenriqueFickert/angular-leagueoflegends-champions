import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNotFoundComponent } from './content-not-found.component';

describe('ContentNotFoundComponent', () => {
  let component: ContentNotFoundComponent;
  let fixture: ComponentFixture<ContentNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentNotFoundComponent]
    });
    fixture = TestBed.createComponent(ContentNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
