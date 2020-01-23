import { TestBed } from '@angular/core/testing';

import { DrainingRequestService } from './drainingRequest.service';

describe('DrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrainingRequestService = TestBed.get(DrainingRequestService);
    expect(service).toBeTruthy();
  });
});
