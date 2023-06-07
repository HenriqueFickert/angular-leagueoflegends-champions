import { TestBed } from '@angular/core/testing';

import { CardChampionsService } from './card-champions.service';

describe('CardChampionsService', () => {
  let service: CardChampionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardChampionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
