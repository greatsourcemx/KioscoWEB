import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

// Login Service
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  loading = false;
  msgInfo = '';
  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  recuperar() {
    this.loading = true;
    this.auth.recuperar( this.usuario ).subscribe(
      data => {
        this.loading = false;
        swal.fire('Resvisa la bandeja de entrada', 'Se ha enviado el correo de recuperación', 'success');
        swal.fire({
          title: 'Resvisa la bandeja de entrada',
           text: 'Se ha enviado el correo de recuperación',
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
        if (error.error.Message === 'noecnontrado') {
          swal.fire('No se encontró un usuario.', 'Verifica que sea el dato que usaste al registrarte', 'error');
        } else {
          swal.fire('Ocurrio un error al regístrarse.',
            'Intentelo mas tarde', 'error');
        }
      });
  }

}
