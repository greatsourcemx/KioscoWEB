import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rounting
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { SharedModule } from './shared/shared.module';
import { ServiceModule } from './services/service.module';
import { PaginasModule } from './pages/paginas.module';

// Pipes
import { PipesModule } from './pipes/pipes.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecuperarComponent } from './auth/recuperar/recuperar.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ValidarComponent } from './auth/validar/validar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecuperarComponent,
    ResetComponent,
    ValidarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    PipesModule,
    PaginasModule,
    ServiceModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
