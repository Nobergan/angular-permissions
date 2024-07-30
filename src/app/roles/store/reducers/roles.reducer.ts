import { combineReducers, createFeature, createReducer, on } from "@ngrx/store";

import { createAsyncActionReducer } from "@mm/shared/store/helpers";

import { Roles } from "../models/roles.model";
import {
  rolesFeatureKey,
  rolesStateModel,
} from "../../../shared/models/state/roles-state.model";
import { ApiActions } from "../../../shared/store/actions/api.actions";

const addRoleReducer = createReducer<{ title: string }>(
  null,
  on(ApiActions.addRoleAction.succeededAction, (state, { payload }) => payload),
  on(ApiActions.addRoleAction.clearAction, () => null)
);

const getRolesReducer = createReducer<Roles[]>(
  null,
  on(
    ApiActions.getRolesAction.succeededAction,
    (state, { payload }) => payload
  ),
  on(ApiActions.getRolesAction.clearAction, () => null)
);

export const rolesFeature = createFeature({
  name: rolesFeatureKey,
  reducer: combineReducers<rolesStateModel>({
    rolesAction: createAsyncActionReducer(ApiActions.addRoleAction),
    roles: addRoleReducer,

    getRolesAction: createAsyncActionReducer(ApiActions.getRolesAction),
    getRoles: getRolesReducer,
  }),
});
