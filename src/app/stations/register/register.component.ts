import { Component } from '@angular/core'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { DataService } from '../../services/eolica.service'
import { ValueTransformer } from '@angular/compiler/src/util'

@Component({
  selector: 'app-register-station',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterStationComponent {
  public formStations = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(),
    info: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      coordinates: new FormGroup({
        latitude: new FormControl(''),
        longitude: new FormControl(''),
        zone: new FormControl('')
      })
    })
  })
  /* name: FormControl
    code: FormControl
    city: FormControl
    state: FormControl
    public formStations = this.fb.group({
      name: [],
      code: [0],
      info: this.fb.group({
        city: [''],
        state: ['']
        coordinates: this.fb.group({
          latitude: [''],
          longitude: [''],
          zone: ['']
        })
      })
    }) */

  constructor (private service: DataService, private fb: FormBuilder) {}

  public save () {
    console.log(this.service.setStation(this.formStations.value))
    return this.service.setStation(this.formStations.value).subscribe(
      error => console.log(error),
      complete => console.log(complete)
    )
  }
}
