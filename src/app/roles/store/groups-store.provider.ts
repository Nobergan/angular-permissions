import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";

import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { RolesApiEffects, RolesEffects } from "./effects";
import { provideRolesApi } from "../api";
import { rolesFeature } from "./reducers/roles.reducer";

export const provideRolesStore = (): EnvironmentProviders =>
  makeEnvironmentProviders([
    provideRolesApi(),
    provideState(rolesFeature),
    provideEffects([RolesApiEffects, RolesEffects]),
  ]);
