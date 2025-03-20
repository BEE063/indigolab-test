import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-progress-widget',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './progress-widget.component.html',
  styleUrl: './progress-widget.component.scss'
})
export class ProgressWidgetComponent implements OnInit {
  @Input()
  tasksCompleted: number = 0;

  @Input()
  tasksTotal: number = 0;

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;

    ngOnInit(): void {
      this.chartOptions = {
        series: [((this.tasksCompleted / this.tasksTotal) * 100).toFixed(2)],
          chart: {
            height: 350,
            type: "radialBar"
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%"
              }
            }
          },
          labels: ["Прогресс выполнения"]
        };
    }
}
