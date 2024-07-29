import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from "@angular/core";
import { Observable } from "rxjs";

import { HttpGroupsProvider } from "./http-groups.provider";
import { Groups } from "../store/models/groups.model";

export interface GroupsProvider {
  addGroup(title: string): Observable<{ title: string }>;
  getGroups(): Observable<Groups[]>;
}

export const groupsProviderToken: InjectionToken<GroupsProvider> =
  new InjectionToken("GroupsProvider");

export const provideGroupsApi = (): EnvironmentProviders =>
  makeEnvironmentProviders([
    {
      provide: groupsProviderToken,
      useClass: HttpGroupsProvider,
    },
  ]);
