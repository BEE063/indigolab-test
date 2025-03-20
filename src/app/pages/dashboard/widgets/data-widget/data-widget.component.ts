import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-data-widget',
  standalone: true,
  imports: [DatePipe, MatCardModule],
  templateUrl: './data-widget.component.html',
  styleUrl: './data-widget.component.scss',
})
export class DataWidgetComponent {
  @Input()
  startDate: string = '';

  @Input()
  endDate: string = '';
}
