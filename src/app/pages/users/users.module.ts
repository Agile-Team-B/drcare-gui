import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared.module'

import { UsersComponent } from './users.component'
import { CreateUserComponent } from '../create-user/create-user.component'
import { UserListService } from './user-list.service'

export const routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'create', component: CreateUserComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [UsersComponent, CreateUserComponent],
  providers: [UserListService]
})
export class UsersModule {}
