import { TestBed } from '@angular/core/testing';

import { DrainingService } from './draining.service';

describe('DrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrainingService = TestBed.get(DrainingService);
    expect(service).toBeTruthy();
  });
});
