import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PageLoginComponent,
    PageRegisterComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
