import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const RolesActions = createActionGroup({
  source: "Roles",
  events: {
    opened: emptyProps(),
    closed: emptyProps(),
    addRole: props<{
      title: string;
    }>(),
    getRoles: emptyProps(),
  },
});
