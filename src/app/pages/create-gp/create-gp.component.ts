import { Component, OnInit } from '@angular/core'
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms'
import { CreateGPService } from './create-gp.services'
import { LoaderService } from '../../services/loader.service'
import { ToastrService } from 'ngx-toastr'
import { trimSpacesValidate, emailValidator } from '../../validators'

@Component({
  selector: 'app-create-gp',
  templateUrl: './create-gp.component.html',
  styleUrls: ['./create-gp.component.css']
})
export class CreateGPComponent implements OnInit {
  public createForm: FormGroup
  public name: AbstractControl
  public username: AbstractControl
  public password: AbstractControl
  public email: AbstractControl
  public isAdmin: AbstractControl

  constructor(
    fb: FormBuilder,
    private createGPService: CreateGPService,
    private toastr: ToastrService,
    public loaderService: LoaderService
  ) {
    this.createForm = fb.group({
      name: ['', [trimSpacesValidate]],
      username: ['', [trimSpacesValidate]],
      password: [
        '',
        Validators.compose([trimSpacesValidate, Validators.minLength(6)])
      ],
      email: ['', Validators.compose([trimSpacesValidate, emailValidator])],
      isAdmin: [false],
      userType: 'GP'
    })
    Object.keys(this.createForm.controls).map(key => {
      this[key] = this.createForm.controls[key]
    })
  }

  ngOnInit() {}

  public onSubmit(values: any): void {
    if (this.createForm.valid) {
      this.createGPService.createGP(values).subscribe(response => {
        console.log(JSON.stringify(response))
        this.toastr.success('General Practitioner created successfully!')
      })
    }
  }
}
