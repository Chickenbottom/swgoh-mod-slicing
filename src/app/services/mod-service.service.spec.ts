import { TestBed, inject } from '@angular/core/testing';

import { ModServiceService } from './mod-service.service';

describe('ModServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModServiceService]
    });
  });

  it('should be created', inject([ModServiceService], (service: ModServiceService) => {
    expect(service).toBeTruthy();
  }));
});
