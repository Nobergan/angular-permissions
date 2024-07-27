import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'mm-pagination',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent {
  @Output() pageChange = new EventEmitter<number>();
  @Input() maxSize: number;

  previous: string;
  next: string;
}
