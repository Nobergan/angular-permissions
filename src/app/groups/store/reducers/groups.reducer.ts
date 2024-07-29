import { combineReducers, createFeature, createReducer, on } from "@ngrx/store";

import { createAsyncActionReducer } from "@mm/shared/store/helpers";

import { GroupsApiActions } from "../actions";
import {
  groupsFeatureKey,
  groupsStateModel,
} from "../../../shared/models/state/groups-state.model";
import { Groups } from "../models/groups.model";

const addGroupReducer = createReducer<{ title: string }>(
  null,
  on(
    GroupsApiActions.addGroupAction.succeededAction,
    (state, { payload }) => payload
  ),
  on(GroupsApiActions.addGroupAction.clearAction, () => null)
);

const getGroupsReducer = createReducer<Groups[]>(
  null,
  on(
    GroupsApiActions.getGroupsAction.succeededAction,
    (state, { payload }) => payload
  ),
  on(GroupsApiActions.getGroupsAction.clearAction, () => null)
);

export const groupsFeature = createFeature({
  name: groupsFeatureKey,
  reducer: combineReducers<groupsStateModel>({
    groupsAction: createAsyncActionReducer(GroupsApiActions.addGroupAction),
    groups: addGroupReducer,

    getGroupsAction: createAsyncActionReducer(GroupsApiActions.getGroupsAction),
    getGroups: getGroupsReducer,
  }),
});
