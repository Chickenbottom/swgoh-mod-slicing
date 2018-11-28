import { TestBed, inject } from '@angular/core/testing';

import { ModDataService } from './mod-data.service';

describe('ModDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModDataService]
    });
  });

  it('should be created', inject([ModDataService], (service: ModDataService) => {
    expect(service).toBeTruthy();
  }));
});
