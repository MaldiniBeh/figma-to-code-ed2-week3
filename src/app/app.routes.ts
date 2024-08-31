import { Routes } from '@angular/router';
import { AuthentificationComponent } from './components/pages/authentification/authentification.component';
import { RecoverPasswordComponent } from './components/pages/authentification/recover-password/recover-password.component';
import { SignInComponent } from './components/pages/authentification/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/authentification/sign-up/sign-up.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthentificationComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      {
        path: 'reset-password',
        component: RecoverPasswordComponent,
      },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },

  {
    path: 'dashboard',
    component: LayoutComponent,
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
