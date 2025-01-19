import { TestBed } from '@angular/core/testing';

import { PemateriService } from './pemateri.service';

describe('PemateriService', () => {
  let service: PemateriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemateriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
