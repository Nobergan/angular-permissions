import { combineReducers, createFeature, createReducer, on } from "@ngrx/store";

import { createAsyncActionReducer } from "@mm/shared/store/helpers";

import {
  groupsFeatureKey,
  groupsStateModel,
} from "../../../shared/models/state/groups-state.model";
import { Groups } from "../models/groups.model";
import { ApiActions } from "../../../shared/store/actions/api.actions";

const addGroupReducer = createReducer<{ title: string }>(
  null,
  on(
    ApiActions.addGroupAction.succeededAction,
    (state, { payload }) => payload
  ),
  on(ApiActions.addGroupAction.clearAction, () => null)
);

const getGroupsReducer = createReducer<Groups[]>(
  null,
  on(
    ApiActions.getGroupsAction.succeededAction,
    (state, { payload }) => payload
  ),
  on(ApiActions.getGroupsAction.clearAction, () => null)
);

export const groupsFeature = createFeature({
  name: groupsFeatureKey,
  reducer: combineReducers<groupsStateModel>({
    groupsAction: createAsyncActionReducer(ApiActions.addGroupAction),
    groups: addGroupReducer,

    getGroupsAction: createAsyncActionReducer(ApiActions.getGroupsAction),
    getGroups: getGroupsReducer,
  }),
});
