import {Component, OnInit, Input} from '@angular/core';
import {DataService} from "../services/data.service";
import {DeviceGroup} from "../../model";

@Component({
  selector: 'cb-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceGroup: DeviceGroup;


  constructor(private  dataService: DataService) {
  }

  ngOnInit() {

  }

}
