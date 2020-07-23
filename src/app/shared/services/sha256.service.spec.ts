import { TestBed } from '@angular/core/testing';

import { Sha256Service } from './sha256.service';

describe('Sha256Service', () => {
  let service: Sha256Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sha256Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
