import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const GroupsActions = createActionGroup({
  source: "Groups",
  events: {
    opened: emptyProps(),
    closed: emptyProps(),
    addGroup: props<{
      title: string;
    }>(),
    getGroups: emptyProps(),
    updateRoleChecked: props<{
      groupIndex: number;
      roleIndex: number;
      checked: boolean;
    }>(),
  },
});
