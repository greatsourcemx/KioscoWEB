import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  url = URL_SERVICIOS;

  constructor(public http: HttpClient) { }

  principal() {
    return this.http.get( this.url + '/principal' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  comedor() {
    return this.http.get( this.url + '/comedor' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  vacaciones() {
    return this.http.get( this.url + '/vacaciones' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  prestamos() {
    return this.http.get( this.url + '/prestamos' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  prenomina() {
    return this.http.get( this.url + '/prenomina' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  prenominaANT() {
    return this.http.get( this.url + '/prenominaant' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  ahorro() {
    return this.http.get( this.url + '/ahorro' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  periodos() {
    return this.http.get( this.url + '/periodos' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  nomina( param: any ) {
    return this.http.post( this.url + '/nomina', param ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  obtenerPDF( param: any) {
    return this.http.post( this.url + '/nomina/pdf', param ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  obtenerXML( param: any) {
    return this.http.post( this.url + '/nomina/xml', param, { responseType: 'arraybuffer' } ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  perfil() {
    return this.http.get( this.url + '/perfil' ).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

}
