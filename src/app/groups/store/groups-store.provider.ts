import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";

import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { groupsFeature } from "./reducers";
import { GroupsApiEffects, GroupsEffects } from "./effects";
import { provideGroupsApi } from "../api";

export const provideGroupsStore = (): EnvironmentProviders =>
  makeEnvironmentProviders([
    provideGroupsApi(),
    provideState(groupsFeature),
    provideEffects([GroupsApiEffects, GroupsEffects]),
  ]);
