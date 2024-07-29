import {
  Component,
  ContentChildren,
  inject,
  input,
  OnInit,
  output,
  QueryList,
} from "@angular/core";
import { TabComponent } from "./tab/tab.component";
import { NgForOf, NgIf } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { MainState } from "@mm/shared/models/state";
import { GroupsActions } from "../../../groups/store";
import { Router } from "@angular/router";
import { RolesActions } from "../../../roles/store";

@Component({
  selector: "app-tabs",
  standalone: true,
  imports: [NgForOf, ReactiveFormsModule, NgIf],
  templateUrl: "./tabs.component.html",
  styleUrl: "./tabs.component.scss",
})
export class TabsComponent implements OnInit {
  _store = inject(Store<MainState>);
  _router = inject(Router);
  _fb = inject(FormBuilder);

  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;

  addPopupOpen = input<boolean>();
  addButtonText = input<string>();

  clickOpenAddPopup = output();
  clickCloseAddPopup = output();

  form: FormGroup;

  ngOnInit() {
    this.initializeForm();

    if (this.tabs && this.tabs.length > 0) {
      const activeTabs = this.tabs.filter((tab) => tab.active);
      if (activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    }
  }

  initializeForm(): void {
    this.form = this._fb.group({
      title: [""],
    });
  }

  selectTab(tab: TabComponent) {
    if (this.tabs && this.tabs.length > 0) {
      this.tabs.toArray().forEach((t) => (t.active = false));
      tab.active = true;
    }
  }

  onClickOpenAddPopup() {
    this.clickOpenAddPopup.emit();
  }

  onClickCloseAddPopup() {
    this.clickCloseAddPopup.emit();
  }

  onSubmit() {
    const currentRoute = this._router.url;

    if (currentRoute === "/groups") {
      this._store.dispatch(GroupsActions.addGroup(this.form.value));
    } else if (currentRoute === "/roles") {
      this._store.dispatch(RolesActions.addRole(this.form.value));
    }

    this.form.reset();
    this.clickCloseAddPopup.emit();
  }
}
