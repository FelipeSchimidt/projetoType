import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Station } from '../../models/Stations'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class DataService {
    private urlLocal = 'http://localhost:3001'

    constructor (private _http: HttpClient) {}

    public getStation (): Observable<Station> {
      return this._http.get<Station>(`${this.urlLocal}/station/`)
    }

    public setStation (station: Station): Observable<Station> {
      // console.log(typeof (this._http.post<Station>(`${this.urlLocal}/station`, station)))
      return this._http.post<Station>(`${this.urlLocal}/station`, station)
    }
}
