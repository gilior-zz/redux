import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { select } from '@angular-redux/store';
import { Device_Group, Protocol, Time } from 'model';
import { HttpParams } from '@angular/common/http';
@Injectable()
export class DataService {
  @select('device_groups') device_groups$: Observable<Device_Group[]>
  @select('protocols') protocols$: Observable<Protocol[]>
  @select('selected_time') time$: Observable<Time>
  constructor(private http: HttpClient) {
  }

  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }



  start() {
    let httpParams = new HttpParams();

    httpParams = this.handleDevices(httpParams);
    httpParams = this.handleProtocols(httpParams);
    httpParams = this.handleTime(httpParams);

    this.http.get(document.URL, { responseType: 'text', params: httpParams }).subscribe();
  }

  handleDevices(httpParams: HttpParams) {
    let devices: string[] = [];
    this.device_groups$.subscribe(grps => {
      grps.forEach(grp => {
        grp.devices.forEach(device => {
          if (device.active)
            devices.push(String(device.id))
        })
      })
    })
    return httpParams.set('devices', devices.join())
  }

  handleProtocols(httpParams: HttpParams) {
    let protocols: string[] = [];
    this.protocols$.subscribe(prtcls => {
      prtcls.forEach(protocol => {
        if (protocol.active)
          protocols.push(String(protocol.id))
      })
    })
    return httpParams.set('protocols', protocols.join())
  }

  handleTime(httpParams: HttpParams) {
    let times: string[] = [];
    this.time$.subscribe(time => {

      times.push(String(time.id))
    })
    return httpParams.set('times', times.join())
  }

}
