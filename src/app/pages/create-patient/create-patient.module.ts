import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { CreatePatientComponent } from './create-patient.component';
import { CreatePatientService } from './create-patient.services';

export const routes = [
  { path: '', component: CreatePatientComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [CreatePatientComponent],
  providers: [CreatePatientService]
})
export class CreatePatientModule {}
