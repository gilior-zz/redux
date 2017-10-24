import { Component, OnInit, Input } from '@angular/core';
import { Protocol } from 'model';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Action } from 'store/action';

@Component({
  selector: 'cb-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {
  @Input() summaryMode: boolean;
  @select('protocols') protocols$: Observable<Protocol>
  
  constructor(private action: Action) { }

  ngOnInit() {

  }

  onChange(protocol: Protocol, checked: boolean) {
    this.action.updateProtocol(protocol, +checked);
  }

}
