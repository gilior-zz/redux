import { IAppState } from "./IAppState";
import { Time, Protocol } from "../model";
import { REQUEST_DATA_SUCCESS, Update_Device, Update_Protocol, Update_Time, Cleae_Selected } from "./action";

const initialState: IAppState = {
  device_groups: [],
  selected_device_groups: [],
  protocols: [],
  selected_protocols: [],
  times: [],
  selected_time: null
}

function storeData(state, action): IAppState {
  action.data.protocols.forEach(element => {
    element.active = false
  });
  action.data.device_groups.forEach(element => {
    element.active = false
  });
  return Object.assign({}, state, {
    device_groups: action.data.device_groups,
    selected_device_groups: action.data.device_groups,
    protocols: action.data.protocols,
    selected_protocols: [],
    times: action.data.times,
    selected_time: action.data.times[0]
  })
}

function updateTime(state, action): IAppState {
  return Object.assign({}, state, {
    selected_time: action.time
  })
}


function updateProtocel(state, action): IAppState {
  let item = state.protocols.find(i => i.id === +action.protocol.id)
  item.active = action.active;

  return Object.assign({}, state, {
    selected_protocols: state.protocols.filter(i => i.active)
  })
}

function updateDevices(state, action): IAppState {

  let group = state.device_groups.find(i => i.id === action.device_group.id)
  let item = group.devices.find(i => i.id === action.device.id)
  item.active = action.active;
  return Object.assign({}, state);

}

function clearSelected(state, action): IAppState {
  state.device_groups.forEach(element => {
    element.active = 0;
    element.devices.forEach(element => {
      element.active = 0
    });
  });

  state.protocols.forEach(element => {
    element.active = 0
  });

  state.selected_protocols.forEach(element => {
    element.active = 0
  });


  return Object.assign({}, state)
}


export function reducer(state = initialState, action) {
  switch (action.type) {
    case Update_Device:
      return updateDevices(state, action);
    case Update_Protocol:
      return updateProtocel(state, action);
    case Update_Time:
      return updateTime(state, action);
    case REQUEST_DATA_SUCCESS:
      return storeData(state, action);
    case Cleae_Selected:
      return clearSelected(state, action)
    default:
      return state;
  }
}



