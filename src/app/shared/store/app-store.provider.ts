import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";

import { provideEffects } from "@ngrx/effects";
import { ApiEffects } from "./effects/api.effects";

export const provideAppStore = (): EnvironmentProviders =>
  makeEnvironmentProviders([provideEffects([ApiEffects])]);
