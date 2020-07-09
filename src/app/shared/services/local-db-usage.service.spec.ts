import { TestBed } from '@angular/core/testing';

import { LocalDbUsageService } from './local-db-usage.service';

describe('LocalDbUsageService', () => {
  let service: LocalDbUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDbUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
