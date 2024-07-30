import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { map, switchMap } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { RolesActions } from "../actions";
import { ApiActions } from "../../../shared/store/actions/api.actions";

export class RolesEffects {
  loadRoles = createEffect(
    (actions$ = inject(Actions)) =>
      actions$.pipe(
        ofType(RolesActions.opened),
        switchMap((action) => {
          return [RolesActions.getRoles()];
        })
      ),
    { functional: true }
  );

  closedRoles = createEffect(
    (actions$ = inject(Actions)) =>
      actions$.pipe(
        ofType(RolesActions.closed),
        switchMap(() => [ApiActions.getRolesAction.clearAction()])
      ),
    { functional: true }
  );

  addRole = createEffect((actions$ = inject(Actions)): any =>
    actions$.pipe(
      ofType(RolesActions.addRole),
      mergeMap((action) => {
        return [
          ApiActions.addRoleAction.action({
            payload: {
              title: action.title,
            },
          }),
        ];
      })
    )
  );

  getRoles = createEffect((actions$ = inject(Actions)): any =>
    actions$.pipe(
      ofType(RolesActions.getRoles),
      map(() => ApiActions.getRolesAction.action(null))
    )
  );
}
