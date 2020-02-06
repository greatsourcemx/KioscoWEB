import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Rutas
import { PagesRoutingModule } from './paginas.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';


// Components
import { HomeComponent } from '../pages/home/home.component';
import { PrincipalComponent } from '../pages/principal/principal.component';
import { PrenominaComponent } from '../pages/prenomina/prenomina.component';
import { PrenominasComponent } from '../pages/prenominas/prenominas.component';
import { PrenominaAntComponent } from '../pages/prenomina-ant/prenomina-ant.component';
import { ComedorComponent } from '../pages/comedor/comedor.component';
import { PrestamoComponent } from '../pages/prestamo/prestamo.component';
import { VacacionesComponent } from '../pages/vacaciones/vacaciones.component';
import { NominasComponent } from '../pages/nominas/nominas.component';
import { PerfilComponent } from '../pages/perfil/perfil.component';
import { CorreoComponent } from '../pages/perfil/correo/correo.component';
import { EliminarComponent } from '../pages/perfil/eliminar/eliminar.component';
import { PagesComponent } from './pages.component';
import { AhorroComponent } from './ahorro/ahorro.component';

@NgModule({
    declarations: [
      HomeComponent,
      PrincipalComponent,
      PrenominaComponent,
      PrenominasComponent,
      PrenominaAntComponent,
      ComedorComponent,
      PrestamoComponent,
      VacacionesComponent,
      NominasComponent,
      PerfilComponent,
      CorreoComponent,
      EliminarComponent,
      PagesComponent,
      AhorroComponent
    ],
    exports: [
      HomeComponent,
      PrincipalComponent,
      PrenominaComponent,
      PrenominasComponent,
      PrenominaAntComponent,
      ComedorComponent,
      PrestamoComponent,
      VacacionesComponent,
      NominasComponent,
      PerfilComponent,
      CorreoComponent,
      EliminarComponent,
      AhorroComponent
    ],
    imports: [
      BrowserModule,
      PagesRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      PipesModule
    ]
})

export class PaginasModule { }
