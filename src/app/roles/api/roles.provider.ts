import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from "@angular/core";
import { Observable } from "rxjs";

import { Roles } from "../store/models/roles.model";
import { HttpRolesProvider } from "./http-roles.provider";

export interface RolesProvider {
  addRole(title: string): Observable<{ title: string }>;

  getRoles(): Observable<Roles[]>;

  updateRoleChecked(
    groupIndex: number,
    roleIndex: number,
    checked: boolean
  ): Observable<any>;
}

export const rolesProviderToken: InjectionToken<RolesProvider> =
  new InjectionToken("RolesProvider");

export const provideRolesApi = (): EnvironmentProviders =>
  makeEnvironmentProviders([
    {
      provide: rolesProviderToken,
      useClass: HttpRolesProvider,
    },
  ]);
