import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { PagesComponent } from './pages.component'
import { AuthGuard } from '../auth.guard'

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
        data: { breadcrumb: 'Users' },
        // canActivate: [AuthGuard]
      }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
