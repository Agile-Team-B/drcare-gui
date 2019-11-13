import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { PharmacistsService } from './pharmacists.services'
import { LoaderService } from '../../services/loader.service'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'

import { GridModel } from '../shared/grid/grid.model'
import { trimSpacesValidate, emailValidator } from '../../validators'

@Component({
  selector: 'app-user',
  templateUrl: './pharmacists.component.html',
  styleUrls: ['./pharmacists.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PharmacistsComponent implements OnInit {
  public modalRef: NgbModalRef
  public searchForm: FormGroup
  public editPharmForm: FormGroup

  @ViewChild('content', null)
  private content
  @ViewChild('isAdminTmpl', null)
  isAdminTmpl: TemplateRef<any>
  @ViewChild('actionTmpl', null)
  actionTmpl: TemplateRef<any>

  selectedUserId: number
  settings: GridModel
  columns: Array<any> = [
    {
      name: 'Name',
      prop: 'name'
    },
    {
      name: 'Email',
      prop: 'email'
    },
    {
      name: 'Username',
      prop: 'username'
    },
    {
      name: 'Admin',
      prop: 'isAdmin',
      cellTemplate: null
    },
    {
      name: 'Action',
      prop: 'id',
      cellTemplate: null
    }
  ]

  constructor(
    fb: FormBuilder,
    private modalService: NgbModal,
    private pharmacistsService: PharmacistsService,
    public loaderService: LoaderService
  ) {
    this.searchForm = fb.group({
      usernameSearch: ['']
    })
    Object.keys(this.searchForm.controls).map(key => {
      this[key] = this.searchForm.controls[key]
    })
    this.settings = new GridModel(this.columns, 10)
    this.editPharmForm = fb.group({
      name: ['', [trimSpacesValidate]],
      username: ['', [trimSpacesValidate]],
      email: ['', Validators.compose([trimSpacesValidate, emailValidator])],
      isAdmin: [false],
      userType: ['PHARMACIST']
    })
    Object.keys(this.editPharmForm.controls).map(key => {
      this[key] = this.editPharmForm.controls[key]
    })
  }

  closeModal(): void {
    this.modalService.dismissAll();
    this.loadPharmacists();
  }

  edit(row): void {
    this.selectedUserId = row.id
    this.modalService.open(this.content, { size: 'lg' })

    for (const key in row) {
      if (this.editPharmForm.controls[key]) {
        this.editPharmForm.controls[key].setValue(row[key])
      }
    }
  }

  submitEditForm(values: any): void {
    const body = { id: this.selectedUserId, ...values }
    console.log('val: ', body)

    this.pharmacistsService.updatePharmacist(body).subscribe(data => {
      console.log('resData', data);
      this.closeModal();
    })
  }

  ngOnInit() {
    this.loadPharmacists()
  }

  checkGridDataLoad(): boolean {
    return this.settings.rows.length > 0
  }

  syncGridData(gridModel: GridModel): void {
    this.loadPharmacists(gridModel)
  }

  searchPharmacists(values): void {
    const body = { username: values.usernameSearch }
    console.log('body', body)

    this.pharmacistsService.searchPharmacists(body).subscribe(data => {
      const settings = { ...this.settings }

      settings.rows = data
      this.settings = { ...settings }
    })
  }

  
  loadPharmacists(gridModel: GridModel = this.settings): void {
    this.pharmacistsService.getPharmacists().subscribe(data => {
      const settings = { ...gridModel },
        colLen = settings.columns.length

      settings.rows = data
      settings.columns[colLen - 2].cellTemplate = this.isAdminTmpl
      settings.columns[colLen - 1].cellTemplate = this.actionTmpl
      this.settings = { ...settings }
    })
  }
}
