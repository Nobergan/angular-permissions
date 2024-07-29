import { AsyncActionState } from "@mm/shared/store/models";
import { Groups } from "../../../groups/store/models/groups.model";

export const groupsFeatureKey = "Groups";

export interface groupsStateModel {
  groupsAction: AsyncActionState<{ title: string }>;
  groups: { title: string };
  getGroupsAction: AsyncActionState<Groups[]>;
  getGroups: Groups[];
}
