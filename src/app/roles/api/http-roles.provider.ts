import { inject, Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { environment } from "@mm/environment";
import { Observable } from "rxjs";
import { Roles } from "../store/models/roles.model";

@Injectable()
export class HttpRolesProvider {
  firebaseDatabaseURL = environment.firebaseConfig.databaseURL;

  private _httpClient = inject(HttpClient);

  addRole(title: string) {
    return this._httpClient.post<{ title: string }>(
      `${this.firebaseDatabaseURL}/roles.json`,
      {
        title: title,
        checked: false,
      }
    );
  }

  getRoles(): Observable<Roles[]> {
    return this._httpClient
      .get<Roles[]>(`${this.firebaseDatabaseURL}/roles.json`)
      .pipe(
        map((response: Roles[]) => {
          return response ? Object.values(response).map((role) => role) : [];
        })
      );
  }
}
