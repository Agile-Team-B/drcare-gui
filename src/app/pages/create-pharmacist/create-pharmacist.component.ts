import { Component, OnInit } from '@angular/core'
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms'
import { CreatePharmacistService } from './create-pharmacist.services'
import { LoaderService } from '../../services/loader.service'
import { ToastrService } from 'ngx-toastr'
import { trimSpacesValidate, emailValidator } from '../../validators'

@Component({
  selector: 'app-create-pharmacist',
  templateUrl: './create-pharmacist.component.html',
  styleUrls: ['./create-pharmacist.component.scss']
})
export class CreatePharmacistComponent implements OnInit {
  public createPharmForm: FormGroup

  constructor(
    fb: FormBuilder,
    private createPharmService: CreatePharmacistService,
    private toastr: ToastrService,
    public loaderService: LoaderService
  ) {
    this.createPharmForm = fb.group({
      name: ['', [trimSpacesValidate]],
      username: ['', [trimSpacesValidate]],
      password: [
        '',
        Validators.compose([trimSpacesValidate, Validators.minLength(6)])
      ],
      email: ['', Validators.compose([trimSpacesValidate, emailValidator])],
      isAdmin: [false],
      userType: ['PHARMACIST']
    })
    Object.keys(this.createPharmForm.controls).map(key => {
      this[key] = this.createPharmForm.controls[key]
    })
  }

  ngOnInit() {}

  public onSubmit(values: any): void {
    if (this.createPharmForm.valid) {
      this.createPharmService.createPharmacist(values).subscribe(response => {
        console.log(response)
        this.toastr.success('Pharmacist created successfully!')
      })
    }
  }
}
