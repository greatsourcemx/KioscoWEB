import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit, OnDestroy {

  usuario: Usuario = new Usuario();
  pin: string;
  codigo: string;
  msg: string;
  loading: boolean;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private auth: AuthService) { }

  ngOnInit() {
    this.auth.logout();
    this.msg = 'Validando la información';
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.usuario.pin = params.pin;
      this.usuario.codigo = params.codigo;
      this.auth.validar( this.usuario )
      .subscribe(data => {
        this.usuario = data;
        if ( this.usuario.correo !== '' ) {
          this.msg = 'Se ha validado la cuenta de correo correctamente.';
        } else {
          this.msg = 'El correo electrónico ya fue validado o el enlace ha expirado.';
        }
        this.loading = false;
      });

     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
