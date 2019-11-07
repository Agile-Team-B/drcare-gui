import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared.module'

import { PharmacistsComponent } from './pharmacists.component'

import { PharmacistsService } from './pharmacists.services'

export const routes = [
  { path: '', component: PharmacistsComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [PharmacistsComponent],
  providers: [PharmacistsService]
})
export class PharmacistsModule {}
