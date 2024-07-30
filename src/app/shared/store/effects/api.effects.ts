import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { switchMap } from "rxjs";

import { createAsyncActionEffect } from "@mm/shared/store/helpers";

import { groupsProviderToken } from "../../../groups/api";
import { rolesProviderToken } from "../../../roles/api";
import { ApiActions } from "../actions/api.actions";

export class ApiEffects {
  handleAddGroup = createEffect(
    (
      actions$ = inject(Actions),
      groupsProvider = inject(groupsProviderToken)
    ): any =>
      actions$.pipe(
        ofType(ApiActions.addGroupAction.action),
        switchMap(({ payload }) =>
          createAsyncActionEffect(
            groupsProvider.addGroup(payload.title),
            ApiActions.addGroupAction
          )
        )
      ),
    {
      functional: true,
    }
  );

  handleGetGroups = createEffect(
    (
      actions$ = inject(Actions),
      groupsProvider = inject(groupsProviderToken)
    ): any =>
      actions$.pipe(
        ofType(
          ApiActions.addGroupAction.succeededAction,
          ApiActions.getGroupsAction.action
        ),
        switchMap(() => {
          return createAsyncActionEffect(
            groupsProvider.getGroups(),
            ApiActions.getGroupsAction
          );
        })
      ),
    {
      functional: true,
    }
  );

  handleAddRole = createEffect(
    (
      actions$ = inject(Actions),
      rolesProvider = inject(rolesProviderToken)
    ): any =>
      actions$.pipe(
        ofType(ApiActions.addRoleAction.action),
        switchMap(({ payload }) =>
          createAsyncActionEffect(
            rolesProvider.addRole(payload.title),
            ApiActions.addRoleAction
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
          ApiActions.addRoleAction.succeededAction,
          ApiActions.getRolesAction.action
        ),
        switchMap(() => {
          return createAsyncActionEffect(
            rolesProvider.getRoles(),
            ApiActions.getRolesAction
          );
        })
      ),
    {
      functional: true,
    }
  );
}
