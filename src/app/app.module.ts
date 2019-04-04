import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { StationModule } from './stations/station.module'
import { DataService } from './services/eolica.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StationModule
  ],
  exports: [
    AppComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
