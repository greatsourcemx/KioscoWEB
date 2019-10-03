import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { URL_SERVICIOS } from '../config/config';


@Injectable()
export class AuthService {

  url: string = URL_SERVICIOS;
  usuario: Usuario = new Usuario();

  constructor(private http: HttpClient,
              public router: Router) {
    this.cargarStorage();
  }

  cargarUsuario() {
    return this.http.get( this.url + '/user' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  cargarStorage() {
    if ( localStorage.getItem('usuario') ) {
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.usuario = null;
    }
  }

  guardarStorage( usuario: Usuario ) {
    localStorage.setItem('usuario', JSON.stringify( usuario ));
    this.usuario = usuario;
  }

  estaLogueado() {
    return ( this.usuario ) ? true : false;
  }

  login( usuario: Usuario) {
    return this.http.post(this.url + '/login', usuario ).pipe(
      map((data: Usuario) => {
        this.guardarStorage(data);
        return data;
      })
    );
  }

  registrar( usuario: Usuario ) {
    const url = URL_SERVICIOS + '/registrar';
    return this.http.post( url, usuario).pipe(
      map((data: Usuario) => {
        return data;
      })
    );
  }

  validar( usuario: Usuario ) {
    return this.http.post( this.url + '/validacion', usuario ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  recuperar( usuario: Usuario ) {
    const url = URL_SERVICIOS + '/recuperar';
    return this.http.post( url, usuario ).pipe(
      map((data: Usuario) => {
        return data;
      })
    );
  }

  validaRecuperacion( usuario: Usuario ) {
    return this.http.post( this.url + '/valida/recuperacion', usuario ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  cambiarCorreo( usuario: Usuario ) {
    const url = URL_SERVICIOS + '/cambio/mail';
    return this.http.put( url, usuario ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  resetPassword(usuario: Usuario) {
    return this.http.put( this.url + '/valida/recuperacion', usuario ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  cambiarPassword( usuario: Usuario ) {
    return this.http.put( this.url + '/cambio/password', usuario ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  borrarCuenta( usuario: Usuario ) {
    return this.http.put( this.url + '/borrar', usuario ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  cargarImagenes() {
    return this.http.get( this.url + '/images' ).pipe(
      map((data: string[]) => {
        return data;
      })
    );
  }

  logout() {
    localStorage.removeItem('usuario');
  }
}
