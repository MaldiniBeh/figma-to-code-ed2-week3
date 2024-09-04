import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { moveInLeft } from '../../../../route-animation';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, AngularSvgIconModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  animations: [moveInLeft()],
})
export class SignInComponent implements OnInit {
  state = '';
  SignForm!: FormGroup;
  eye = true;
  isload!: Boolean;
  typePassword = 'password';
  constructor() {}
  ngOnInit(): void {
    this.onReset();
  }
  onReset() {
    this.SignForm = new FormGroup({
      pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
      mail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,6}$/),
      ]),
    });
  }
  toggleEye() {
    this.eye = !this.eye;
    this.typePassword = this.eye ? 'password' : 'text';
  }
}
