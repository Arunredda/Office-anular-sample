import { TestBed } from '@angular/core/testing';

import { TockenIntersaptorService } from './tocken-intersaptor.service';

describe('TockenIntersaptorService', () => {
  let service: TockenIntersaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TockenIntersaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
