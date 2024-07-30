import { AsyncActionState } from "@mm/shared/store/models";
import { Roles } from "../../../roles/store/models/roles.model";
import { createAsyncActionReducer } from "@mm/shared/store/helpers";
import { ApiActions } from "../../store/actions/api.actions";

export const rolesFeatureKey = "Roles";

export interface rolesStateModel {
  rolesAction: AsyncActionState<{ title: string }>;
  roles: { title: string };
  getRolesAction: AsyncActionState<Roles[]>;
  getRoles: Roles[];
}
