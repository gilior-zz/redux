import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../services/data.service";
import { Device_Group, Device } from "../../model";
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Action } from 'store/action';

@Component({
  selector: 'cb-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

@Input() summaryMode:boolean;
  @select('device_groups') device_groups$: Observable<Device_Group>
  showDownArrow: boolean;
  unCheckAll: boolean;

  constructor(private action: Action) {
  }

  ngOnInit() {

  }

  get arrowClass() {
    return {
      'arrow-down': this.showDownArrow,
      'arrow-up': !this.showDownArrow,
    }
  }

  onGroupChk(checked: Boolean, device_group: Device_Group) {
    this.unCheckAll = !checked;
  }

  onItemChk(checked: Boolean, device: Device, device_group: Device_Group) {    
    this.action.updateDevice(device, device_group,+checked)
  }


}
