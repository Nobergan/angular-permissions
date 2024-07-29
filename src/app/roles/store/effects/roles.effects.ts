import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { map, switchMap } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { RolesActions, RolesApiActions } from "../actions";

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
        switchMap(() => [RolesApiActions.getRolesAction.clearAction()])
      ),
    { functional: true }
  );

  addRole = createEffect((actions$ = inject(Actions)): any =>
    actions$.pipe(
      ofType(RolesActions.addRole),
      mergeMap((action) => {
        return [
          RolesApiActions.addRoleAction.action({
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
      map(() => RolesApiActions.getRolesAction.action(null))
    )
  );
}
