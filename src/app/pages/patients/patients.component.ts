import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core'
import { PatientsService } from './patients.services'
import { LoaderService } from '../../services/loader.service'
import {
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder
} from '@angular/forms'

import { GridModel } from '../shared/grid/grid.model'

@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientsComponent implements OnInit {
  public searchForm: FormGroup

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
    private patientsService: PatientsService,
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
    this.loadPatients()
  }

  checkGridDataLoad(): boolean {
    return this.settings.rows.length > 0
  }

  syncGridData(gridModel: GridModel): void {
    this.loadPatients(gridModel)
  }

  edit() {
    console.log('Yet to be implemented...')
  }

  searchPatients(values): void {
    console.log('body', values)

    this.patientsService.searchPatients(values).subscribe(data => {
      const settings = { ...this.settings }

      settings.rows = data
      this.settings = { ...settings }
    })
  }

  loadPatients(gridModel: GridModel = this.settings): void {
    this.patientsService.getPatients().subscribe(data => {
      const settings = { ...gridModel },
        colLen = settings.columns.length

      settings.rows = data
      settings.columns[colLen - 1].cellTemplate = this.actionTmpl
      this.settings = { ...settings }
    })
  }
}
