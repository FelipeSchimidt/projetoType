import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-campo-control-error',
  templateUrl: './campo-control-error.component.html',
  styleUrls: ['./campo-control-error.component.css']
})
export class CampoControlErroComponent implements OnInit {
  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor () { }

  public ngOnInit () {
  }
}
