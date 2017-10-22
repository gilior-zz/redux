import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import {DataService} from "./services/data.service";
import { ProtocolComponent } from './protocol/protocol.component';
import { TimePeriodComponent } from './time-period/time-period.component';
import { SmumaryComponent } from './smumary/smumary.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    ProtocolComponent,
    TimePeriodComponent,
    SmumaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
