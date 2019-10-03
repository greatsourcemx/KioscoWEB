import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/model.index';
import { AuthService, ConsultasService } from '../../../services/service.index';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html'
})
export class CorreoComponent implements OnInit {

  confirmacion: boolean;
  msg: string;
  confirmMail = '';
  error: boolean;
  usuario: Usuario = new Usuario();
  loading: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  changeEmail() {
    this.loading = true;
    if ( this.usuario.correo === this.confirmMail ) {
      this.authService.cambiarCorreo( this.usuario )
      .subscribe(
        data => {
          this.error = false;
          this.msg = 'Se cambio el correo correctamente.';
          this.loading = false;
        },
        error => {
          this.error = true;
          this.msg = 'La contraseña es incorrecta.';
          this.loading = false;
        });
    } else {
      this.error = true;
      this.msg = 'Las cuentas de correos no coinciden.';
      this.loading = false;
    }
  }

  onKeydown(event) {
    this.error = false;
    this.msg = null;
    this.confirmacion = false;
  }

}
