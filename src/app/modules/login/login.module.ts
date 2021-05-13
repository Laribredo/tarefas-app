import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAreaComponent } from './components/login-area/login-area.component';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login-routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    LoginAreaComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(LoginRoutes),
  ]
})
export class LoginModule { }
