import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

// Login Service
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styles: []
})
export class ResetComponent implements OnInit {

  usuario: Usuario = new Usuario();
  titulo: string;
  msg: string;
  tipo: string;
  loading: boolean;
  error: boolean;
  confirm = '';

  private sub: any;
  confirmacion: boolean;

  constructor(public activatedRoute: ActivatedRoute,
              private router: Router,
              private auth: AuthService) {
                activatedRoute.params.subscribe( params => {
                  this.usuario.pin = params.token;
                  this.usuario.codigo = params.codigo;
                  this.validaEnlace();
                });
              }

  ngOnInit() {
  }

  validaEnlace() {
    this.auth.validaRecuperacion( this.usuario )
    .subscribe(
      data => {
        this.loading = false;
      },
      error => {
        this.loading = false;
        switch (error.error.Message) {
          case 'invalido':
           swal.fire('En enlace ha expirado', '', 'warning');
           break;
          default:
           swal.fire('Ocurrio un error al recuperar la cuenta.', 'Intentelo mas tarde', 'error');
           break;
        }
      });
  }

  changeUserPass( ) {
    this.loading = true;
    if (this.usuario.password === this.confirm) {
      this.auth.resetPassword( this.usuario )
      .subscribe(data => {
        swal.fire({
          title: 'La contraseña fue cambiada correctamente.',
          text: '',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        }).then((result) => {
         if (result.value) {
           this.router.navigate(['/']);
         }
       });
      },
      error => {
        this.loading = false;
        swal.fire('Ocurrio un error', 'intentelo mas tarde', 'error');
      });
    } else {
      this.loading = false;
      swal.fire('Las contraseñas no coinciden', '', 'warning');
    }
  }

  onKeydown(event) {
    this.error = false;
    this.msg = null;
    this.confirmacion = false;
  }

}
