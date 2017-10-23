import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Device_Group, Protocol, Time } from 'model';
import { Action } from 'store/action';

@Component({
  selector: 'cb-smumary',
  templateUrl: './smumary.component.html',
  styleUrls: ['./smumary.component.scss']
})
export class SmumaryComponent implements OnInit {

  @select('selected_protocols') protocols$: Observable<Protocol>
  @select('selected_time') time$: Observable<Time>
  constructor(private action: Action) { }

  ngOnInit() {
  }

  onClear() {
    this.action.clearSelected()
  }

}
