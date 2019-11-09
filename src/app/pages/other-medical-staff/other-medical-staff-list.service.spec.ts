import { TestBed } from '@angular/core/testing';

import { OtherMedicalStaffListService } from './other-medical-staff-list.service';

describe('OtherMedicalStaffListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherMedicalStaffListService = TestBed.get(OtherMedicalStaffListService);
    expect(service).toBeTruthy();
  });
});
