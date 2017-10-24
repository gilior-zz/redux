import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import {DataService} from "./services/data.service";
import { ProtocolComponent } from './protocol/protocol.component';
import { TimePeriodComponent } from './time-period/time-period.component';
import { SmumaryComponent } from './smumary/smumary.component';
import {HttpClientModule} from "@angular/common/http";
import { NgReduxModule,NgRedux } from '@angular-redux/store';
import { IAppState } from 'store/IAppState';
import { store } from 'store/store';
import { Action } from 'store/action';
import { DeviceGroupComponent } from './device-group/device-group.component';


@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    ProtocolComponent,
    TimePeriodComponent,
    SmumaryComponent,
    DeviceGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule,    
  ],
  providers: [
    DataService,
    Action
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
 }
