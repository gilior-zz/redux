import { NgRedux } from '@angular-redux/store'
import { Injectable } from "@angular/core";
import { DataService } from '../app/services/data.service'
import { IAppState } from "./IAppState";
import { Device, Protocol, Time, Device_Group } from "../model";



export const Cleae_Selected = 'clear/Selected';
export const Update_Device = 'device/Update';
export const Update_Protocol = 'protocol/Update';
export const Update_Time = 'time/Update';
export const REQUEST_DATA_SUCCESS = 'data/REQUEST_SUCCESS';

@Injectable()
export class Action {
  constructor(private ngRedux: NgRedux<IAppState>, private dataService: DataService) {
  }

  getData() {
    this.dataService.getData<IAppState>('assets/ex_data.tmp')
      .subscribe(response => {
        this.ngRedux.dispatch({
          type: REQUEST_DATA_SUCCESS,
          data: response
        })
      })
  }

  updateTime(time: Time) {
    this.ngRedux.dispatch({
      type: Update_Time,
      time
    })
  }


  updateDevice(device: Device, device_group: Device_Group, active: number) {
    this.ngRedux.dispatch({
      type: Update_Device,
      device,
      device_group,
      active
    })
  }

  updateProtocol(protocol: Protocol, active: number) {
    this.ngRedux.dispatch({
      type: Update_Protocol,
      protocol,
      active
    })
  }

  clearSelected() {
    this.ngRedux.dispatch({
      type: Cleae_Selected
    })
  }
}


