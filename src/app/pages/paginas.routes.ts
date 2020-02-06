import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { PrincipalComponent } from '../pages/principal/principal.component';
import { PrenominasComponent } from '../pages/prenominas/prenominas.component';
import { ComedorComponent } from '../pages/comedor/comedor.component';
import { PrestamoComponent } from '../pages/prestamo/prestamo.component';
import { VacacionesComponent } from '../pages/vacaciones/vacaciones.component';
import { NominasComponent } from '../pages/nominas/nominas.component';
import { PerfilComponent } from '../pages/perfil/perfil.component';
import { AhorroComponent } from '../pages/ahorro/ahorro.component';


import { AuthGuardService } from '../services/service.index';

const paginasRoutes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [ AuthGuardService ],
      children: [
         { path: 'principal', component: PrincipalComponent, data: { titulo: 'Principal' } },
         { path: 'prenomina', component: PrenominasComponent, data: { titulo: 'Pre nomina' } },
         { path: 'comedor', component: ComedorComponent, data: { titulo: 'Comedor' } },
         { path: 'prestamos', component: PrestamoComponent, data: { titulo: 'prestamos' } },
         { path: 'vacaciones', component: VacacionesComponent, data: { titulo: 'Vacaciones' } },
         { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil' } },
         { path: 'nominas', component: NominasComponent, data: { titulo: 'Nóminas' } },
         { path: 'ahorro', component: AhorroComponent, data: { titulo: 'Ahorro' } },
         { path: '', redirectTo: '/principal', pathMatch: 'full'  },
      ]
   },
];

@NgModule({
   imports: [RouterModule.forRoot(paginasRoutes)],
   exports: [RouterModule]
 })
 export class PagesRoutingModule { }

