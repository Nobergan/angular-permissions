import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { switchMap } from "rxjs";

import { createAsyncActionEffect } from "@mm/shared/store/helpers";
import { rolesProviderToken } from "../../api";
import { RolesApiActions } from "../actions";

export class RolesApiEffects {
  handleAddRole = createEffect(
    (
      actions$ = inject(Actions),
      rolesProvider = inject(rolesProviderToken)
    ): any =>
      actions$.pipe(
        ofType(RolesApiActions.addRoleAction.action),
        switchMap(({ payload }) =>
          createAsyncActionEffect(
            rolesProvider.addRole(payload.title),
            RolesApiActions.addRoleAction
          )
        )
      ),
    {
      functional: true,
    }
  );

  handleGetRoles = createEffect(
    (
      actions$ = inject(Actions),
      rolesProvider = inject(rolesProviderToken)
    ): any =>
      actions$.pipe(
        ofType(
          RolesApiActions.addRoleAction.succeededAction,
          RolesApiActions.getRolesAction.action
        ),
        switchMap(() => {
          return createAsyncActionEffect(
            rolesProvider.getRoles(),
            RolesApiActions.getRolesAction
          );
        })
      ),
    {
      functional: true,
    }
  );
}
