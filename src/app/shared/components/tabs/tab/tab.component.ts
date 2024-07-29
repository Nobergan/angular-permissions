import { Component, Input } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-tab",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./tab.component.html",
  styleUrl: "./tab.component.scss",
})
export class TabComponent {
  @Input()
  title!: string;
  active: boolean = false;
}
