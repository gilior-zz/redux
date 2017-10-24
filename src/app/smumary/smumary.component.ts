import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Device_Group, Protocol, Time } from 'model';
import { Action } from 'store/action';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'cb-smumary',
  templateUrl: './smumary.component.html',
  styleUrls: ['./smumary.component.scss']
})
export class SmumaryComponent implements OnInit {
  @select('device_groups') device_groups$: Observable<Device_Group[]>
  @select('protocols') protocols$: Observable<Protocol[]>
  @select('selected_protocols') selected_protocols$: Observable<Protocol[]>
  @select('selected_time') time$: Observable<Time>

  constructor(private action: Action, private dataService: DataService) { }

  ngOnInit() {

  }

  onClear() {
    this.action.clearSelected()
  }

  onStartLearning() {
    this.dataService.start();

  }
}
