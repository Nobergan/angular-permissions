import { createAsyncAction } from "@mm/shared/store/helpers";
import { Roles } from "../models/roles.model";

const addRoleAction = createAsyncAction<{ title: string }, { title: string }>(
  `Add Role`
);

const getRolesAction = createAsyncAction<null, Roles[]>(`Get Roles`);

export const RolesApiActions = {
  addRoleAction,
  getRolesAction,
};
