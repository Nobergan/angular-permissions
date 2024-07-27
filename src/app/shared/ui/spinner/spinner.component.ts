import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'ui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgIf],
  standalone: true,
})
export class SpinnerComponent {
  @Input() label: string;

  @Input()
  size: 'xs' | 's' | 'm' = 'm';
}
