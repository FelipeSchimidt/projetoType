import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormDebugComponent } from './form-debug/form-debug.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormDebugComponent
  ]
})
export class ShareModule {}
