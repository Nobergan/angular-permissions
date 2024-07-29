import { createAsyncAction } from "@mm/shared/store/helpers";
import { Groups } from "../models/groups.model";

const addGroupAction = createAsyncAction<{ title: string }, { title: string }>(
  `Add Group`
);

const getGroupsAction = createAsyncAction<null, Groups[]>(`Get Groups`);

export const GroupsApiActions = {
  addGroupAction,
  getGroupsAction,
};
