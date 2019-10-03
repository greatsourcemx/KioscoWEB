import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Usuario, Perfil } from '../../models/model.index';
import { AuthService, ConsultasService } from '../../services/service.index';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: Perfil = null;
  confirmacion: boolean;
  msg: string;
  error: boolean;
  usuario: Usuario = new Usuario();
  loading: boolean;
  confirmPass = '';

  constructor(private titleService: Title,
              public consuService: ConsultasService,
              public authService: AuthService) { }

  ngOnInit() {
    this.titleService.setTitle('Perfil - Kiosco IMA');
    this.cargarPerfil();
  }

  cargarPerfil() {
    this.consuService.perfil()
    .subscribe((data: Perfil) => {
      this.perfil = data;
    });
  }

  changeUserPass() {
    this.loading = true;
    if (this.usuario.nuevoPassword === this.confirmPass) {
      this.authService.cambiarPassword( this.usuario )
      .subscribe(
        data => {
          this.error = false;
          this.msg = 'Se cambio la contraseña correctamente.';
          this.loading = false;
        },
        error => {
          this.error = true;
          this.msg = 'La contraseña actual es incorrecta.';
          this.loading = false;
        });
    } else {
      this.error = true;
      this.msg = 'Las nuevas contraseñas no coinciden.';
      this.loading = false;
    }
  }

  onKeydown(event) {
    this.error = false;
    this.msg = null;
    this.confirmacion = false;
  }

}
