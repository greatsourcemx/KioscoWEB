import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecuperarComponent } from './auth/recuperar/recuperar.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ValidarComponent } from './auth/validar/validar.component';

const routes: Routes = [
  { path: 'sesion', component: LoginComponent, data: { titulo: 'Inicio de Sesión' } },
  { path: 'registrar', component: RegisterComponent, data: { titulo: 'Regístro de Cuenta' } },
  { path: 'recuperar', component: RecuperarComponent, data: { titulo: 'Recuperacion de Cuenta' } },
  { path: 'recuperar/:codigo/:token', component: ResetComponent, data: { titulo: 'Recuperacion de Cuenta' } },
  { path: 'validar/:pin/:codigo', component: ValidarComponent, data: { titulo: 'Validación de Cuenta' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
