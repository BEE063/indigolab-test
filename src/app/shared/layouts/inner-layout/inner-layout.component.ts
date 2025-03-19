import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inner-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
  ],
  templateUrl: './inner-layout.component.html',
  styleUrl: './inner-layout.component.scss',
})
export class InnerLayoutComponent {}
