import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms'

import { DataService } from '../../services/eolica.service'
import { Http } from '@angular/http'

@Component({
  selector: 'app-register-station',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterStationComponent implements OnInit {
  apiEstados = []

  forms: FormGroup

  constructor (
    private service: DataService,
    private fb: FormBuilder,
    private http: Http
  ) {}

  public ngOnInit () {
    // console.log(this.apiEstados)

    this.forms = this.fb.group({
      name: [null],
      code: [null]
    })
  }

  onSubmit () {
    console.log(this.forms.value)
    /* this.http.post('https://httpbin.org/post')
      .subscribe(data => console.log(data)) */
  }

  /* public save () {
    console.log(this.service.setStation(this.formStations.value))
    return this.service.setStation(this.formStations.value).subscribe(
      error => console.log(error),
      complete => console.log(complete)
    )
  } */

  public readEstados () {
    return this.service.getEstados().subscribe(estado => {
      this.apiEstados.push(estado)
    })
  }
}
