import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { fallIn } from '../../../../route-animation';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
  animations: [fallIn()],
})
export class RecoverPasswordComponent implements OnInit {
  state = '';
  SignForm!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.onReset();
  }
  onReset() {
    this.SignForm = new FormGroup({
      mail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,6}$/),
      ]),
    });
  }
}
