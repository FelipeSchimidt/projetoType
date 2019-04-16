import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { DataService } from "../../services/eolica.service";
import { Http } from "@angular/http";

@Component({
  selector: "app-register-station",
  templateUrl: "register.component.html",
  styleUrls: ["register.component.css"]
})
export class RegisterStationComponent implements OnInit {
  apiEstados = [];
  apiCidades = [];
  cidades = [];
  ufs = [];

  forms: FormGroup;

  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private http: Http
  ) {}

  public ngOnInit() {
    this.forms = this.fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ])
      ],
      code: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(`/[0-9][0-9][0-9]/`)
        ])
      ],
      info: this.fb.group({
        state: [null, [Validators.required]],
        city: [null, [Validators.required]]
      })
    });
    this.readEstados();
    this.readCidades();
    console.log(this.apiEstados.map(estado=> estado.id))
    //this.testeEstado()
    //console.log(this.apiEstados)
    //console.log(this.cidades);
    //console.log(this.forms.get('info.state'));
  }

  public onSubmit(): any {
    // console.log(this.forms)
    return this.service
      .setStation(this.forms.value)
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        this.resetar()
      );
  }

  public resetar(): any {
    this.forms.reset();
  }

  public verificarCampoValido(campo) {
    return !this.forms.get(campo).valid && !this.forms.get(campo).touched;
  }

  public aplicaCssError(campo) {
    return {
      "has-error": this.verificarCampoValido(campo),
      "has-feedback": this.verificarCampoValido(campo)
    };
  }

  /* public save () {
    console.log(this.service.setStation(this.formStations.value))
    return this.service.setStation(this.formStations.value).subscribe(
      error => console.log(error),
      complete => console.log(complete)
    )
  } */

  public readEstados() {
    return this.service.getEstados().subscribe(estado => {
      this.apiEstados.push(estado);
    });
  }

  public readCidades() {
    return this.service
      .getCidades()
      .subscribe(cidade => this.apiCidades.push(cidade));
  }

  public readCidadesUf(estado) {
    const uf = this.apiEstados.filter(ufs => ufs.id === estado);
    
    //console.log(uf);
    return uf
    /* return this.service
      .getCidadesUf(estado)
      .subscribe(cidade => this.cidades.push(cidade)); */
  }
}
