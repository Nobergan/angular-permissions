import { AsyncActionState } from "@mm/shared/store/models";
import { Roles } from "../../../roles/store/models/roles.model";

export const rolesFeatureKey = "Roles";

export interface rolesStateModel {
  rolesAction: AsyncActionState<{ title: string }>;
  roles: { title: string };
  getRolesAction: AsyncActionState<Roles[]>;
  getRoles: Roles[];
}
