import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { select } from '@angular-redux/store';
import { Device_Group, Protocol, Time } from 'model';
import { HttpParams } from '@angular/common/http';
@Injectable()
export class DataService {
  @select('device_groups') device_groups$: Observable<Device_Group[]>
  @select('protocols') protocols$: Observable<Protocol>
  @select('selected_time') time$: Observable<Time>
  constructor(private http: HttpClient) {
  }

  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  start() {
    let httpParams = new HttpParams();
    let devices: string[] = [];
    this.device_groups$.subscribe(grps => {
      grps.forEach(grp => {
        grp.devices.forEach(device => {
          if (device.active)
            devices.push(String(device.id))
        })
      })
      httpParams = httpParams.set('devices', devices.join())

      let protocols: string[] = [];
      this.protocols$.subscribe(protocol => {
        if (protocol.active)
          protocols.push(String(protocol.id))
      })
      httpParams = httpParams.set('protocols', protocols.join())

    }
    )

    this.time$.subscribe(time => {
      httpParams = httpParams.set('times', String(time.id))
    })

    this.http.get(document.URL, { responseType: 'text', params: httpParams }).subscribe();
  }

}
