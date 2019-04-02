import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/services/eolica.service'

@Component({
  selector: 'app-list-stations',
  templateUrl: 'list.component.html'
})
export class ListStationComponent implements OnInit {
  public stations = []

  constructor (private service: DataService) {}

  public ngOnInit () {
    this.index()
    console.log(this.stations)
  }

  public index () {
    return this.service.getStation().subscribe(data => {
      this.stations.push(data.docs)
    })
  }
}
