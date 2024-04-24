import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageRegisterComponent} from "./pages/page-register/page-register.component";

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: PageLoginComponent
      },
      {
        path: 'register',
        component: PageRegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
