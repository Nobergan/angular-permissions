import { inject, Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { environment } from "@mm/environment";
import { Observable } from "rxjs";
import { Groups } from "../store/models/groups.model";

@Injectable()
export class HttpGroupsProvider {
  firebaseDatabaseURL = environment.firebaseConfig.databaseURL;

  private _httpClient = inject(HttpClient);

  addGroup(title: string) {
    return this._httpClient.post<{ title: string }>(
      `${this.firebaseDatabaseURL}/groups.json`,
      {
        title: title,
      }
    );
  }

  getGroups(): Observable<Groups[]> {
    return this._httpClient
      .get<Groups[]>(`${this.firebaseDatabaseURL}/groups.json`)
      .pipe(
        map((response: Groups[]) => {
          return response ? Object.values(response).map((group) => group) : [];
        })
      );
  }
}
