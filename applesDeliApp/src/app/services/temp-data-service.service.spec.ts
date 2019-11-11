import { TestBed } from '@angular/core/testing';

import { TempDataServiceService } from './temp-data-service.service';

describe('TempDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempDataServiceService = TestBed.get(TempDataServiceService);
    expect(service).toBeTruthy();
  });
});
