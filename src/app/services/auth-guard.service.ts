import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router ) { }

  canActivate() {
    if ( this.authService.estaLogueado() ) {
        return true;
    } else {
      this.router.navigate(['/sesion']);
      return false;
    }
  }

  canLoad() {
    if ( this.authService.estaLogueado() ) {
      return true;
    } else {
      this.router.navigate(['/sesion']);
      return false;
    }
  }

}
