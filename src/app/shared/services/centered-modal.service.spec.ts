import { TestBed } from '@angular/core/testing';

import { CenteredModalService } from './centered-modal.service';

describe('CenteredModalService', () => {
  let service: CenteredModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenteredModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
