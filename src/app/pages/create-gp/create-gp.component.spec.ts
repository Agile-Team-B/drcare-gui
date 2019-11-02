import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGPComponent } from './create-gp.component';

describe('CreateGPComponent', () => {
  let component: CreateGPComponent;
  let fixture: ComponentFixture<CreateGPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGPComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
