import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared.module'
import { OtherMedicalStaffComponent } from './other-medical-staff.component';
import { OtherMedicalStaffListService } from './other-medical-staff-list.service';

export const routes = [
  { path: '', component: OtherMedicalStaffComponent, pathMatch: 'full' }
  //{ path: 'create', component: CreateUserComponent}
]

@NgModule({
  declarations: [OtherMedicalStaffComponent],
  imports: [
    RouterModule.forChild(routes), SharedModule
  ],
  providers: [OtherMedicalStaffListService]
})
export class OtherMedicalStaffModule { }
