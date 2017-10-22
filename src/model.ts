export interface Device {
  id: number;
  name: string;
  active:boolean;
}

export  interface DeviceGroup{
  id: number;
  name: string;
  devices:Device[];
}
