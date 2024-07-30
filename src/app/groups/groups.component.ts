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
import { GroupsActions } from "./store";
import { Observable } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LetDirective } from "@mm/shared/directives";
import { TabsComponent } from "../shared/components/tabs/tabs.component";
import { TabComponent } from "../shared/components/tabs/tab/tab.component";
import { RolesActions } from "../roles/store";
import { GroupsAndRolesVmSelectors } from "../shared/store/selectors/app-vm.selectors";
import { GroupsAndRolesVmModel } from "../shared/models/groups-and-roles-vm.model";

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

  vm$: Observable<GroupsAndRolesVmModel> = this._store
    .select(GroupsAndRolesVmSelectors.selectGroupsAndRolesViewModel)
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
