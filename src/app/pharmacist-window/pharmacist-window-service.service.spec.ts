import { TestBed } from '@angular/core/testing';

import { PharmacistWindowServiceService } from './pharmacist-window-service.service';

describe('PharmacistWindowServiceService', () => {
  let service: PharmacistWindowServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacistWindowServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
