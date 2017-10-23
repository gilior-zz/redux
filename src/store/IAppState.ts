import {Device_Group, Protocol, Time} from "../model";

export interface IAppState {
  device_groups: Device_Group[];
  selected_device_groups: Device_Group[];
  protocols: Protocol[];
  selected_protocols: Protocol[];
  times: Time[];
  selected_time: Time;
}
