import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

// Login Service
import { AuthService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;
  usuario: Usuario = new Usuario();
  imagenes: string[] = null;

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.cargarImagenes();
  }

  cargarImagenes() {
    this.authService.cargarImagenes()
    .subscribe((data: string []) => {
      this.imagenes = data;
    });
  }

  login() {
    this.loading = true;
    this.authService.login( this.usuario )
      .subscribe(data => {
         this.router.navigate(['/']);
       },
       error => {
         this.loading = false;
         if ( error.statusText === 'Unauthorized') {
           swal.fire('Usuario o contraseña incorrectas', '', 'warning');
         } else {
           swal.fire('Ocurrio un error!', 'Intentelo más tarde', 'error');
         }
       });
    }

}
