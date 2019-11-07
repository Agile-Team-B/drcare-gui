import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { PagesComponent } from './pages.component'
import { AuthGuard } from '../auth.guard'
import { GeneralPractitionerComponent } from './general-practitioner/general-practitioner.component'

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: 'create-pharmacist',
        loadChildren:
          './create-pharmacist/create-pharmacist.module#CreatePharmacistModule',
        data: { breadcrumb: 'Create Pharmacist' }
        // canActivate: [AuthGuard]
      },
      {
        path: 'pharmacists',
        loadChildren: './pharmacists/pharmacists.module#PharmacistsModule',
        data: { breadcrumb: 'Pharmacists' }
        // canActivate: [AuthGuard]
      },
      {
        path: 'create-gp',
        loadChildren: './create-gp/create-gp.module#CreateGPModule',
        data: { breadcrumb: 'Create GP' }
        // canActivate: [AuthGuard]
      },
      {
        path: 'create-patient',
        loadChildren:
          './create-patient/create-patient.module#CreatePatientModule',
        data: { breadcrumb: 'Create Patient' }
        // canActivate: [AuthGuard]
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
        data: { breadcrumb: 'Users' }
        // canActivate: [AuthGuard]
      },
      {
        path: 'gp',
        component: GeneralPractitionerComponent
        // canActivate: [AuthGuard]
      }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
