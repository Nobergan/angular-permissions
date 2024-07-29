import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { IconComponent } from "@mm/shared/ui";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MainState } from "@mm/shared/models/state";
import { Store } from "@ngrx/store";
import { GroupsActions, GroupsVmModel, GroupsVmSelectors } from "./store";
import { Observable } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LetDirective } from "@mm/shared/directives";
import { TabsComponent } from "../shared/components/tabs/tabs.component";
import { TabComponent } from "../shared/components/tabs/tab/tab.component";
import { RolesActions, RolesVmModel, RolesVmSelectors } from "../roles/store";

@Component({
  selector: "app-groups",
  standalone: true,
  imports: [
    IconComponent,
    NgIf,
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf,
    LetDirective,
    TabsComponent,
    TabComponent,
  ],
  templateUrl: "./groups.component.html",
  styleUrl: "./groups.component.scss",
})
export class GroupsComponent implements OnInit, OnDestroy {
  _store = inject(Store<MainState>);
  _destroyRef = inject(DestroyRef);

  addPopupOpen = false;
  addButtonText = "Add new Group";

  vm$: Observable<GroupsVmModel> = this._store
    .select(GroupsVmSelectors.selectGroupsViewModel)
    .pipe(takeUntilDestroyed(this._destroyRef));

  roles$: Observable<RolesVmModel> = this._store
    .select(RolesVmSelectors.selectRolesViewModel)
    .pipe(takeUntilDestroyed(this._destroyRef));

  ngOnInit(): void {
    this._store.dispatch(GroupsActions.opened());
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
