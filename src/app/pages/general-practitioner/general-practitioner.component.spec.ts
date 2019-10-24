import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPractitionerComponent } from './general-practitioner.component';

describe('GeneralPractitionerComponent', () => {
  let component: GeneralPractitionerComponent;
  let fixture: ComponentFixture<GeneralPractitionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
