import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { AsyncPipe, NgForOf } from "@angular/common";
import { LetDirective } from "@mm/shared/directives";
import { Store } from "@ngrx/store";
import { MainState } from "@mm/shared/models/state";
import { Observable } from "rxjs";
import { GroupsActions, GroupsVmSelectors } from "../groups/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TabsComponent } from "../shared/components/tabs/tabs.component";
import { TabComponent } from "../shared/components/tabs/tab/tab.component";
import { RolesActions, RolesVmModel, RolesVmSelectors } from "./store";

@Component({
  selector: "app-roles",
  standalone: true,
  imports: [AsyncPipe, LetDirective, TabsComponent, TabComponent, NgForOf],
  templateUrl: "./roles.component.html",
  styleUrl: "./roles.component.scss",
})
export class RolesComponent implements OnInit, OnDestroy {
  _store = inject(Store<MainState>);
  _destroyRef = inject(DestroyRef);

  addPopupOpen = false;
  addButtonText = "Add new Role";

  vm$: Observable<RolesVmModel> = this._store
    .select(RolesVmSelectors.selectRolesViewModel)
    .pipe(takeUntilDestroyed(this._destroyRef));

  ngOnInit(): void {
    this._store.dispatch(RolesActions.opened());
  }

  openAddPopup() {
    this.addPopupOpen = true;
  }

  closeAddPopup() {
    this.addPopupOpen = false;
  }

  ngOnDestroy(): void {
    this._store.dispatch(GroupsActions.closed());
    this._store.dispatch(RolesActions.closed());
  }
}
