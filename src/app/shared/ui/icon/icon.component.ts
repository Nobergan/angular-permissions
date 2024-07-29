import { Component, Input } from '@angular/core';

import { IconSize } from '@mm/shared/models';

@Component({
  selector: 'mm-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
})
export class IconComponent {
  @Input() iconName: string;
  @Input() size: IconSize;
}
