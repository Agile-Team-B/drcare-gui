import { Component, OnInit, TemplateRef,
  ViewChild,
  ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GeneralPractitionerService } from './general-practitioner.service';
import { LoaderService } from '../../services/loader.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { GridModel } from '../shared/grid/grid.model';
import { trimSpacesValidate, emailValidator } from '../../validators';

@Component({
  selector: 'app-general-practitioner',
  templateUrl: './general-practitioner.component.html',
  styleUrls: ['./general-practitioner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralPractitionerComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchForm: FormGroup;
  public editGPForm: FormGroup;

  @ViewChild('content', null)
  private content;
  @ViewChild('isAdminTmpl', null)
  isAdminTmpl: TemplateRef<any>;
  @ViewChild('actionTmpl', null)
  actionTmpl: TemplateRef<any>;

  selectedUserId: number;
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
      name: 'Admin',
      prop: 'isAdmin',
      cellTemplate: null
    },
    {
      name: 'Action',
      prop: 'id',
      cellTemplate: null
    }
  ];

  constructor(
    fb: FormBuilder,
    private modalService: NgbModal,
    private gpService: GeneralPractitionerService,
    public loaderService: LoaderService
  ) {
    this.searchForm = fb.group({
      usernameSearch: ['']
    });
    Object.keys(this.searchForm.controls).map(key => {
      this[key] = this.searchForm.controls[key];
    });
    this.settings = new GridModel(this.columns, 10);
    this.editGPForm = fb.group({
      name: ['', [trimSpacesValidate]],
      username: ['', [trimSpacesValidate]],
      email: ['', Validators.compose([trimSpacesValidate, emailValidator])],
      isAdmin: [false],
      userType: ['GP']
    });
    Object.keys(this.editGPForm.controls).map(key => {
      this[key] = this.editGPForm.controls[key];
    });
  }

  closeModal(): void {
    this.modalService.dismissAll();
    this.loadGP();
  }

  edit(row): void {
    this.selectedUserId = row.id;
    this.modalService.open(this.content, { size: 'lg' });

    for (const key in row) {
      if (this.editGPForm.controls[key]) {
        this.editGPForm.controls[key].setValue(row[key]);
      }
    }
  }

  ngOnInit() {
    this.loadGP();
  }

  submitEditForm(values: any): void {
    const body = { id: this.selectedUserId, ...values };
    console.log('val: ', body);

    this.gpService.updateGP(body).subscribe(data => {
      console.log('resData', data);
      this.closeModal();
    });
  }

  checkGridDataLoad(): boolean {
    return this.settings.rows.length > 0;
  }

  syncGridData(gridModel: GridModel): void {
    this.loadGP(gridModel);
  }

  searchGP(values): void {
    const body = { username: values.usernameSearch };
    console.log('body', body);

    this.gpService.searchGP(body).subscribe(data => {
      const settings = { ...this.settings };

      settings.rows = data;
      this.settings = { ...settings };
    });
  }

  loadGP(gridModel: GridModel = this.settings): void {
    this.gpService.fetchAllGP().subscribe(data => {
      const settings = { ...gridModel };
      const colLen = settings.columns.length;

      settings.rows = data;
      settings.columns[colLen - 2].cellTemplate = this.isAdminTmpl;
      settings.columns[colLen - 1].cellTemplate = this.actionTmpl;
      this.settings = { ...settings };
    });
  }

}
