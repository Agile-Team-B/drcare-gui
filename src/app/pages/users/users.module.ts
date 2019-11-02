import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared.module'

import { UsersComponent } from './users.component'
import { CreateUserComponent } from '../create-user/create-user.component'

export const routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'create', component: CreateUserComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [UsersComponent, CreateUserComponent],
  providers: []
})
export class UsersModule {}
