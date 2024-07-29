import { groupsFeature } from "../reducers";

const {
  selectGroupsAction,
  selectGroups,
  selectGetGroupsAction,
  selectGetGroups,
} = groupsFeature;

export const GroupsSelectors = {
  selectGroupsAction,
  selectGroups,
  selectGetGroupsAction,
  selectGetGroups,
};
