import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared.module'
import { OtherMedicalStaffComponent } from './other-medical-staff.component';
import { OtherMedicalStaffListService } from './other-medical-staff-list.service';
import { CreateOtherMedicalStaffComponent } from './create-other-medical-staff.component';
import { CreateOtherMedicalStaffService } from './create-other-medical-staff.service';

export const routes = [
  { path: '', component: OtherMedicalStaffComponent, pathMatch: 'full' },
  { path: 'create', component: CreateOtherMedicalStaffComponent}
]

@NgModule({
  declarations: [OtherMedicalStaffComponent, CreateOtherMedicalStaffComponent],
  imports: [
    RouterModule.forChild(routes), SharedModule
  ],
  providers: [OtherMedicalStaffListService, CreateOtherMedicalStaffService]
})
export class OtherMedicalStaffModule { }
