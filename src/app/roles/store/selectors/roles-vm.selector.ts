import { createSelector } from "@ngrx/store";

import { RolesSelectors } from "./roles.selectors";

const selectRolesViewModel = createSelector(
  RolesSelectors.selectGetRoles,
  RolesSelectors.selectRolesAction,
  (roles, rolesAction) => ({
    roles: roles,
  })
);

export const RolesVmSelectors = {
  selectRolesViewModel,
};
