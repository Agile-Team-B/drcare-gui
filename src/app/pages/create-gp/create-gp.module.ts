import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { CreateGPComponent } from './create-gp.component';
import { CreateGPService } from './create-gp.services';

export const routes = [
  { path: '', component: CreateGPComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [CreateGPComponent],
  providers: [CreateGPService]
})
export class CreateGPModule {}
