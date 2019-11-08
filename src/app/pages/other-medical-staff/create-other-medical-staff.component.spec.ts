import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOtherMedicalStaffComponent } from './create-other-medical-staff.component';

describe('CreateOtherMedicalStaffComponent', () => {
  let component: CreateOtherMedicalStaffComponent;
  let fixture: ComponentFixture<CreateOtherMedicalStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOtherMedicalStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOtherMedicalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
