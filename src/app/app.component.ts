import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Device} from "../model";
import {DataService} from "./services/data.service";

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  devices: Observable<Device>;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.devices = this.dataService.getData<Device>('assets/ex_data.tmp')
  }

}
