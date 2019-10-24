import { TestBed } from '@angular/core/testing';

import { GeneralPractitionerService } from './general-practitioner.service';

describe('GeneralPractitionerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralPractitionerService = TestBed.get(GeneralPractitionerService);
    expect(service).toBeTruthy();
  });
});
