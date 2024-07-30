import { createSelector } from "@ngrx/store";

import { RolesSelectors } from "../../../roles/store";
import { GroupsSelectors } from "../../../groups/store";

const selectGroupsAndRolesViewModel = createSelector(
  GroupsSelectors.selectGetGroups,
  GroupsSelectors.selectGroupsAction,
  RolesSelectors.selectGetRoles,
  RolesSelectors.selectRolesAction,
  (groups, groupsAction, roles, rolesAction) => ({
    groups: groups,
    roles: roles,
    rolesChecked: roles ? roles.map((role) => role.checked) : null,
  })
);

export const GroupsAndRolesVmSelectors = {
  selectGroupsAndRolesViewModel,
};
