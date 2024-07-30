import { Groups } from "../../groups/store";
import { Roles } from "../../roles/store";

export interface GroupsAndRolesVmModel {
  groups: Groups[];
  roles: Roles[];
}
