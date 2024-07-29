import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { map, switchMap } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { GroupsActions, GroupsApiActions } from "../actions";

export class GroupsEffects {
  loadGroups = createEffect(
    (actions$ = inject(Actions)) =>
      actions$.pipe(
        ofType(GroupsActions.opened),
        switchMap((action) => {
          return [GroupsActions.getGroups()];
        })
      ),
    { functional: true }
  );

  closedGroups = createEffect(
    (actions$ = inject(Actions)) =>
      actions$.pipe(
        ofType(GroupsActions.closed),
        switchMap(() => [GroupsApiActions.getGroupsAction.clearAction()])
      ),
    { functional: true }
  );

  addGroup = createEffect((actions$ = inject(Actions)): any =>
    actions$.pipe(
      ofType(GroupsActions.addGroup),
      mergeMap((action) => {
        return [
          GroupsApiActions.addGroupAction.action({
            payload: {
              title: action.title,
            },
          }),
        ];
      })
    )
  );

  getGroups = createEffect((actions$ = inject(Actions)): any =>
    actions$.pipe(
      ofType(GroupsActions.getGroups),
      map(() => GroupsApiActions.getGroupsAction.action(null))
    )
  );
}
