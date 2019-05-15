import { TestBed } from '@angular/core/testing';

import { DeadlineServiceService } from './deadline-service.service';

describe('DeadlineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeadlineServiceService = TestBed.get(DeadlineServiceService);
    expect(service).toBeTruthy();
  });
});
