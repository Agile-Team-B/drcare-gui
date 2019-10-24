import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared.module'

import { UsersComponent } from './users.component'

export const routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [UsersComponent],
  providers: []
})
export class UsersModule {}
