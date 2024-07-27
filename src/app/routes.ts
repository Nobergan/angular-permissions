import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/groups/index').then(({ routes }) => routes),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/roles/index').then(({ routes }) => routes),
  },
];
