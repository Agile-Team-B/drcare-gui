import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMedicalStaffComponent } from './other-medical-staff.component';

describe('OtherMedicalStaffComponent', () => {
  let component: OtherMedicalStaffComponent;
  let fixture: ComponentFixture<OtherMedicalStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherMedicalStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherMedicalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
