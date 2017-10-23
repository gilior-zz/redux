import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Device, Device_Group,Protocol, Time} from "../model";
import {DataService} from "./services/data.service";
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'store/IAppState';
import { Action } from 'store/action';

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
 
 

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private action: Action
    ) {
  }

  ngOnInit(): void {
    // this.devices = this.dataService.getData<Device>('assets/ex_data.tmp')
    this.action.getData();
    componentHandler.upgradeDom();
  }

}
