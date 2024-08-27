import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class AuthentificationModule {}
