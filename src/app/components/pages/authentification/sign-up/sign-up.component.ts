import { Component, OnInit } from '@angular/core';
import { moveInLeft } from '../../../../route-animation';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule, AngularSvgIconModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  animations: [moveInLeft()],
})
export class SignUpComponent implements OnInit {
  signUpData!: FormGroup;
  typePassword = 'password';
  eye = true;
  state = '';
  checkedState!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm() {
    this.signUpData = new FormGroup(
      {
        mail: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,6}$/),
        ]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        cpassword: new FormControl('', [Validators.required]),
      },
      { validators: this.matchPassword }
    );
  }

  matchPassword(control: AbstractControl) {
    const password = control.get('password')?.value;
    const cpassword = control.get('cpassword')?.value;
    return password !== cpassword ? { matchPassword: true } : null;
  }
  toggleEye() {
    this.eye = !this.eye;
    this.typePassword = this.eye ? 'password' : 'text';
  }
  OnSignUp(): void {
    console.log('Form', this.signUpData.value);
  }
  setConfirmPasswordError() {
    this.checkedState =
      this.signUpData.value.cpassword != this.signUpData.value.password ? false : true;
  }
}
