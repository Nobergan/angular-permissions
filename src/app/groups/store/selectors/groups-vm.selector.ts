import { createSelector } from "@ngrx/store";

import { GroupsSelectors } from "./groups.selectors";

const selectGroupsViewModel = createSelector(
  GroupsSelectors.selectGetGroups,
  GroupsSelectors.selectGroupsAction,
  (groups, groupsAction) => ({
    // groups: Object.values(groups).map((group) => group.title),
    groups: groups,
  })
);

export const GroupsVmSelectors = {
  selectGroupsViewModel,
};
