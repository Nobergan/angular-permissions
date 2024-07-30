import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { map, switchMap } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { GroupsActions } from "../actions";
import { ApiActions } from "../../../shared/store/actions/api.actions";

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
        switchMap(() => [ApiActions.getGroupsAction.clearAction()])
      ),
    { functional: true }
  );

  addGroup = createEffect((actions$ = inject(Actions)): any =>
    actions$.pipe(
      ofType(GroupsActions.addGroup),
      mergeMap((action) => {
        return [
          ApiActions.addGroupAction.action({
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
      map(() => ApiActions.getGroupsAction.action(null))
    )
  );
}
