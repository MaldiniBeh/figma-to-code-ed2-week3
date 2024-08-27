import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/pages/authentification/authentification.module').then(
        m => m.AuthentificationModule
      ),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule),
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
