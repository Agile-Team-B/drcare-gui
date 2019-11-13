import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared.module'

import { PatientsComponent } from './patients.component'

import { PatientsService } from './patients.services'

export const routes = [
  { path: '', component: PatientsComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [PatientsComponent],
  providers: [PatientsService]
})
export class PatientsModule {}
