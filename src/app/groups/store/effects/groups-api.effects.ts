import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { switchMap } from "rxjs";

import { createAsyncActionEffect } from "@mm/shared/store/helpers";
import { groupsProviderToken } from "../../api";
import { GroupsApiActions } from "../actions";

// import { FilmDetailsProviderToken } from "@mm/film-details/api";
// import { FilmDetailsApiActions } from "@mm/film-details/store";
// import { FilmsApiActions } from "@mm/films/store";
// import { FilmsProviderToken } from "@mm/films/api";
//
// import { LocalStorageService } from "@mm/shared/services";

export class GroupsApiEffects {
  handleAddGroup = createEffect(
    (
      actions$ = inject(Actions),
      groupsProvider = inject(groupsProviderToken)
    ): any =>
      actions$.pipe(
        ofType(GroupsApiActions.addGroupAction.action),
        switchMap(({ payload }) =>
          createAsyncActionEffect(
            groupsProvider.addGroup(payload.title),
            GroupsApiActions.addGroupAction
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
          GroupsApiActions.addGroupAction.succeededAction,
          GroupsApiActions.getGroupsAction.action
        ),
        switchMap(() => {
          return createAsyncActionEffect(
            groupsProvider.getGroups(),
            GroupsApiActions.getGroupsAction
          );
        })
      ),
    {
      functional: true,
    }
  );
}
