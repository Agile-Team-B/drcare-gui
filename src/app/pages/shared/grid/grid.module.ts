import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import { GridComponent } from './grid.component'

@NgModule({
  imports: [CommonModule, NgxDatatableModule],
  exports: [GridComponent],
  declarations: [GridComponent],
  providers: []
})
export class GridModule {}
