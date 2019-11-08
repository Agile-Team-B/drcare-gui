import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { OtherMedicalStaffListService } from './other-medical-staff-list.service';
import { OtherMedicalStaff } from './other-medical.staff.model';
import { LoaderService } from '../../services/loader.service'
import {
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder
} from '@angular/forms'

import { GridModel } from '../shared/grid/grid.model'

@Component({
  selector: 'app-other-medical-staff',
  templateUrl: './other-medical-staff.component.html',
  styleUrls: ['./other-medical-staff.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OtherMedicalStaffComponent implements OnInit {
  public searchForm: FormGroup;
  public username: AbstractControl;
  @ViewChild('actionTmpl', null)
  actionTmpl: TemplateRef<any>;
  settings: GridModel;
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
  ];

  otherMedicalStaffs: Array<OtherMedicalStaff> = [];

  constructor(private otherMedicalStaffService: OtherMedicalStaffListService, fb: FormBuilder,
    public loaderService: LoaderService) {
      this.searchForm = fb.group({
        username: ['']
      });
      Object.keys(this.searchForm.controls).map(key => {
        this[key] = this.searchForm.controls[key]
      });
      this.settings = new GridModel(this.columns, 10)   ;   
  }

  ngOnInit() {
    this.fetchAllUsers();
    this.loadAllOtherMedicalStaff();
  }

  checkGridDataLoad(): boolean {
    return this.settings.rows.length > 0
  }

  syncGridData(gridModel: GridModel): void {
    this.loadAllOtherMedicalStaff(gridModel)
  }

  edit() {
    console.log('Yet to be implemented...')
  }

  fetchAllUsers() {
    this.otherMedicalStaffService.fetchAllOtherMedicalStaff().subscribe(response => {
        this.otherMedicalStaffs = response;
    });
    
    /*this.otherMedicalStaffService.fetchAllUsers().subscribe( resp => {
        this.users = resp;
    });*/
  }

  loadAllOtherMedicalStaff(gridModel: GridModel = this.settings): void {
    this.otherMedicalStaffService.fetchAllOtherMedicalStaff().subscribe(data => {
      const settings = { ...gridModel },
        colLen = settings.columns.length

      settings.rows = data
      settings.columns[colLen - 1].cellTemplate = this.actionTmpl
      this.settings = { ...settings }
    })
  }

  //searchOtherMedicalStaff()

}
