import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/model.index';
import { AuthService } from '../../../services/service.index';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html'
})
export class EliminarComponent implements OnInit {
  msg: string;
  error: boolean;
  loading: boolean;
  usuario: Usuario = new Usuario();

  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit() {
  }

  baja() {
    this.loading = true;
    this.authService.borrarCuenta( this.usuario )
    .subscribe(
      data => {
        this.loading = false;
        this.router.navigate(['/sesion']);
      },
      error => {
        this.loading = false;
        this.error = true;
        this.msg = 'La contraseña actual es incorrecta.';
      });
    }
}
