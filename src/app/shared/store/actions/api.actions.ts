import { createAsyncAction } from "@mm/shared/store/helpers";

import { Roles } from "../../../roles/store";
import { Groups } from "../../../groups/store";

const addGroupAction = createAsyncAction<{ title: string }, { title: string }>(
  `Add Group`
);

const getGroupsAction = createAsyncAction<null, Groups[]>(`Get Groups`);

const addRoleAction = createAsyncAction<{ title: string }, { title: string }>(
  `Add Role`
);

const getRolesAction = createAsyncAction<null, Roles[]>(`Get Roles`);

export const ApiActions = {
  addGroupAction,
  getGroupsAction,
  addRoleAction,
  getRolesAction,
};
