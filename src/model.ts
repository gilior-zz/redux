export interface Device {
  id: number;
  name: string;
  active: number;

}

export interface Device_Group {
  id: number;
  name: string;
  devices: Device[];
}

export interface Protocol {
  id: number;
  name: string
  active: boolean;
}

export interface Time {
  id: number;
  name: string;
  active: boolean;
}



