import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { FormDebugComponent } from './form-debug/form-debug.component'
import { CampoControlErroComponent } from './campo-control-error/campo-control-error.component'

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ]
})
export class ShareModule {}
