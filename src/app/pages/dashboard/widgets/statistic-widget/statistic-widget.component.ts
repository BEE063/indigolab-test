import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-statistic-widget',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './statistic-widget.component.html',
  styleUrl: './statistic-widget.component.scss'
})
export class StatisticWidgetComponent {
  @Input()
  tasksCompleted?: number;

  @Input()
  tasksTotal?: number;
}
