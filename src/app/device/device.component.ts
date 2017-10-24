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
}
