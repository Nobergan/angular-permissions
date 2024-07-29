import { rolesFeature } from "../reducers/roles.reducer";

const { selectRolesAction, selectRoles, selectGetRolesAction, selectGetRoles } =
  rolesFeature;

export const RolesSelectors = {
  selectRolesAction,
  selectRoles,
  selectGetRolesAction,
  selectGetRoles,
};
