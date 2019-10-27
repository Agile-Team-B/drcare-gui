import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared.module'

import { CreatePharmacistComponent } from './create-pharmacist.component'

export const routes = [
  { path: '', component: CreatePharmacistComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [CreatePharmacistComponent],
  providers: []
})
export class CreatePharmacistModule {}
