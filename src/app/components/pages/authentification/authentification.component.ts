import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [AngularSvgIconModule, RouterOutlet],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss',
})
export class AuthentificationComponent {
  constructor(private router: Router) {}

  OnDashbord() {
    this.router.navigate(['/', 'dashboard']);
  }
}
