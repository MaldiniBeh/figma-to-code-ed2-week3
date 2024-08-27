import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss',
})
export class AuthentificationComponent {
  constructor(private router: Router) {}

  OnDashbord() {
    this.router.navigate(['/', 'dashboard']);
  }
}
