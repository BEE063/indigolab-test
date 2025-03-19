import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'app',
        loadComponent: () =>
          import('./shared/layouts/inner-layout/inner-layout.component').then(
            (c) => c.InnerLayoutComponent,
          ),
        // children: [{ path: 'dashboard', component: DashboardComponent }],
      },
    ],
  },
  {
    path: '**',
    redirectTo: `error/404`,
  },
];
