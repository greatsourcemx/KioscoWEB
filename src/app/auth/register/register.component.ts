import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

// Login Service
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  usuario: Usuario = new Usuario();
  // Array Para fecha de nacimeinto
  years: Array<any> = [];
  dias: Array<any> = [];
  Meses = [{ codigo: '01', nombre: 'Enero' }, { codigo: '02', nombre: 'Febrero' },
  { codigo: '03', nombre: 'Marzo'}, { codigo: '04', nombre: 'Abril' },
  { codigo: '05', nombre: 'Mayo' }, { codigo: '06', nombre: 'Junio' },
  { codigo: '07', nombre: 'Julio'}, { codigo: '08', nombre: 'Agosto' },
  { codigo: '09', nombre: 'Septiembre' }, { codigo: '10', nombre: 'Octubre' },
  { codigo: '11', nombre: 'Noviembre' }, { codigo: '12', nombre: 'Diciembre' }];

  constructor(private auth: AuthService,
              private router: Router) {  }

  ngOnInit() {
    const yearBegin = (new Date()).getFullYear() - 80;
    const yearActual = (new Date()).getFullYear() - 16;
    for (let i = yearActual; i >= yearBegin; i--) {
        this.years.push(i);
    }
    for (let i = 1; i <= 31; i++) {
        this.dias.push(i);
    }
  }

  registrar() {
    this.loading = true;
    this.auth.registrar(this.usuario).subscribe(
     data => {
       swal.fire('Resvisa la bandeja de entrada', 'Se ha enviado el correo de validación', 'success');
       swal.fire({
        title: 'Resvisa la bandeja de entrada',
        text: 'Se ha enviado el correo de validación',
        type: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['/']);
          // this.router.navigate(['[/sesion]']);
        }
      });
     },
     error => {
       this.loading = false;
       switch (error.error.Message) {
         case 'noregistro':
          swal.fire('Los datos que proporcionaste no coinciden con nuestra base de datos de empleados.',
          'Verifica si la información es correcta. Favor de comunicarse con Recursos Humanos.', 'warning');
          break;
         case 'reenvio':
         case 'novalidacorreo':
            swal.fire('El número de empleado ya se encuentra registrado',
            'Confirma el correo de validación', 'warning');
            break;
         case 'yaregistrado':
            swal.fire('El número de empleado ya se encuentra registrado',
            '', 'warning');
            break;
         default:
          swal.fire('Ocurrio un error al regístrarse.',
            'Intentelo mas tarde', 'error');
          break;
       }
       this.usuario = new Usuario();
     });
  }
}
