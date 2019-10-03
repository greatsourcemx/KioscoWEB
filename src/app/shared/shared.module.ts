import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
      FooterComponent,
      NavbarComponent,
      SidebarComponent
    ],
    exports: [
      FooterComponent,
      NavbarComponent,
      SidebarComponent
    ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      PipesModule
    ]
})

export class SharedModule { }
