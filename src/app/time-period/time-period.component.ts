import { Component, OnInit, Input } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Time } from 'model';
import { Action } from 'store/action';

@Component({
  selector: 'cb-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.scss']
})
export class TimePeriodComponent implements OnInit {
  @select('times') times$: Observable<Time>
  constructor(private action: Action) { }

  ngOnInit() {

  }

  onChnage(val:Time) {
   
    this.action.updateTime(val);
    
  }

}
