import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'panel-control',
    loadChildren: () =>
      import('./panel/panel.module').then((m) => m.PanelModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./enterprise/enterprise.module').then((m) => m.EnterpriseModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
