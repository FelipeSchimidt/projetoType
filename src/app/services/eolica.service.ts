import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Http } from '@angular/http'

import { Station } from '../../models/Stations'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class DataService {
    private urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    private urlLocal = 'http://localhost:3001'
    private urlTeste = 'https://httpbin.org/post'

    constructor (
      private _http: HttpClient,
      private http: Http
    ) {}

    public getStation (): Observable<Station> {
      return this._http.get<Station>(`${this.urlLocal}/station/`)
    }

    public setStation (station: Station): Observable<Station> {
      // console.log(typeof (this._http.post<Station>(`${this.urlLocal}/station`, station)))
      return this._http.post<Station>(`${this.urlLocal}/station`, station)
    }

    public getEstados () {
      return this._http.get(this.urlEstados)
    }
}
