import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core'
import { PharmacistsService } from './pharmacists.services'
import { LoaderService } from '../../services/loader.service'
import {
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder
} from '@angular/forms'

import { GridModel } from '../shared/grid/grid.model'

@Component({
  selector: 'app-user',
  templateUrl: './pharmacists.component.html',
  styleUrls: ['./pharmacists.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PharmacistsComponent implements OnInit {
  public searchForm: FormGroup
  public username: AbstractControl

  @ViewChild('actionTmpl', null)
  actionTmpl: TemplateRef<any>

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
      name: 'Action',
      prop: 'id',
      cellTemplate: null
    }
  ]

  constructor(
    fb: FormBuilder,
    private pharmacistsService: PharmacistsService,
    public loaderService: LoaderService
  ) {
    this.searchForm = fb.group({
      username: ['']
    })
    Object.keys(this.searchForm.controls).map(key => {
      this[key] = this.searchForm.controls[key]
    })
    this.settings = new GridModel(this.columns, 10)
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

  edit() {
    console.log('Yet to be implemented...')
  }

  searchPharmacists(values): void {
    console.log('body', values)

    this.pharmacistsService.searchPharmacists(values).subscribe(data => {
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
      settings.columns[colLen - 1].cellTemplate = this.actionTmpl
      this.settings = { ...settings }
    })
  }
}
