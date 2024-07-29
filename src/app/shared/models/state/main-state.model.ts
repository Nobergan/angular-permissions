import { groupsStateModel } from "./groups-state.model";
import { rolesStateModel } from "./roles-state.model";

export interface MainState {
  groups: groupsStateModel;
  roles: rolesStateModel;
}
