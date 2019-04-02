import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Station } from '../../models/Stations'

@Injectable({
  providedIn: 'root'
})

export class DataService {
    private urlLocal = 'http://localhost:3001'

    constructor (private _http: HttpClient) {}

    public getStation () {
      return this._http.get<Station>(`${this.urlLocal}/station/`)
    }
}
