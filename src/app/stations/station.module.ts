import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { StationComponent } from '../stations/station.component'
import { RegisterStationComponent } from '../stations/register/register.component'
import { ListStationComponent } from '../stations/list/list.component'
import { HttpModule } from '@angular/http'
import { ShareModule } from '../shared/share.module'

@NgModule({
  declarations: [
    StationComponent,
    RegisterStationComponent,
    ListStationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    HttpModule,
    ShareModule
  ],
  exports: [
    StationComponent,
    RegisterStationComponent
  ]
})
export class StationModule {}
