import { combineReducers, createFeature, createReducer, on } from "@ngrx/store";

import { createAsyncActionReducer } from "@mm/shared/store/helpers";

import { RolesApiActions } from "../actions";
import { Roles } from "../models/roles.model";
import {
  rolesFeatureKey,
  rolesStateModel,
} from "../../../shared/models/state/roles-state.model";

const addRoleReducer = createReducer<{ title: string }>(
  null,
  on(
    RolesApiActions.addRoleAction.succeededAction,
    (state, { payload }) => payload
  ),
  on(RolesApiActions.addRoleAction.clearAction, () => null)
);

const getRolesReducer = createReducer<Roles[]>(
  null,
  on(
    RolesApiActions.getRolesAction.succeededAction,
    (state, { payload }) => payload
  ),
  on(RolesApiActions.getRolesAction.clearAction, () => null)
);

export const rolesFeature = createFeature({
  name: rolesFeatureKey,
  reducer: combineReducers<rolesStateModel>({
    rolesAction: createAsyncActionReducer(RolesApiActions.addRoleAction),
    roles: addRoleReducer,

    getRolesAction: createAsyncActionReducer(RolesApiActions.getRolesAction),
    getRoles: getRolesReducer,
  }),
});
