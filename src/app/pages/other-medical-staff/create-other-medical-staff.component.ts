import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms'
import { LoaderService } from '../../services/loader.service'
import { ToastrService } from 'ngx-toastr'
import { trimSpacesValidate, emailValidator } from '../../validators'
import { CreateOtherMedicalStaffService } from './create-other-medical-staff.service';

@Component({
  selector: 'app-create-other-medical-staff',
  templateUrl: './create-other-medical-staff.component.html',
  styleUrls: ['./create-other-medical-staff.component.scss']
})
export class CreateOtherMedicalStaffComponent implements OnInit {
  public createOtherMedicalStaffForm: FormGroup;
  public name: AbstractControl;
  public username: AbstractControl;
  public password: AbstractControl;
  public email: AbstractControl;
  public isAdmin: AbstractControl;
  private fb: FormBuilder;

  constructor(fb: FormBuilder, private createOtherMedicalStaffService: CreateOtherMedicalStaffService, 
    private toastr: ToastrService, public loaderService: LoaderService) {
      this.createOtherMedicalStaffForm = fb.group({
        name: ['', [trimSpacesValidate]],
        username: ['', [trimSpacesValidate]],
        password: ['', Validators.compose([trimSpacesValidate, Validators.minLength(6)])],
        email: ['', Validators.compose([trimSpacesValidate, emailValidator])],
        isAdmin: [false],
        userType: ['OTHER']
        }
      );
    Object.keys(this.createOtherMedicalStaffForm.controls).map(key => {
        this[key] = this.createOtherMedicalStaffForm.controls[key]
      }
    );
  }

  ngOnInit(){

  }

  public onSubmit(values: any): void {
    if (this.createOtherMedicalStaffForm.valid) {
      this.createOtherMedicalStaffService.createOtherMedicalStaff(values).subscribe(response => {
        console.log("Other medical staff : "+response);
        console.log('SUCCESSFULLY CREATED');
        this.toastr.success('Other medical staff created successfully!')
        //EMPTY FORM FIELDS
        this.createOtherMedicalStaffForm.reset();
      })
    }
  }

}
