import { TestBed } from '@angular/core/testing';

import { ManageAirlinesService } from './manage-airlines.service';

describe('ManageAirlinesService', () => {
  let service: ManageAirlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAirlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
