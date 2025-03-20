import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

import { DataWidgetComponent } from './widgets/data-widget/data-widget.component';
import { StatisticWidgetComponent } from './widgets/statistic-widget/statistic-widget.component';
import { ProgressWidgetComponent } from './widgets/progress-widget/progress-widget.component';

import { ProjectService } from '../../shared/services/project.service';
import { ProjectDTO } from '../../models/project.dto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    DataWidgetComponent,
    StatisticWidgetComponent,
    ProgressWidgetComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private readonly _projectService = inject(ProjectService);

  projects: ProjectDTO[] = [];

  isAddProject = false;

  readonly form = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    tasksCompleted: new FormControl<number | null>(null, Validators.required),
    tasksTotal: new FormControl<number | null>(null, Validators.required),
    startDate: new FormControl<string | null>(null, Validators.required),
    endDate: new FormControl<string | null>(null, Validators.required),
  });

  ngOnInit(): void {
    this.projects = this._projectService.getProjects();
  }

  drop(event: CdkDragDrop<ProjectDTO[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);

    this._projectService.setProjects(this.projects);
  }

  openAddProject(): void {
    this.isAddProject = true;
  }

  removeProject(id: number): void {
    this.projects = this.projects.filter((p) => p.id !== id);

    this._projectService.setProjects(this.projects);
  }

  addProject(): void {
    this.projects.push({
      id: Math.random(),
      name: this.form.value.name ?? '',
      tasksCompleted: this.form.value.tasksCompleted ?? 0,
      tasksTotal: this.form.value.tasksTotal ?? 0,
      startDate: this.form.value.startDate ?? '',
      endDate: this.form.value.startDate ?? '',
    });

    this.isAddProject = false;
    this.form.reset();
    this._projectService.setProjects(this.projects);
  }
}
