import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';
import { Periodos, Nomina } from '../../models/model.index';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-nominas',
  templateUrl: './nominas.component.html',
  styleUrls: ['./nominas.component.css']
})
export class NominasComponent implements OnInit {

  Split: Periodos[] = [];
  nomina: Nomina = new Nomina();
  TotalHoras: any;
  TotalExtras: any;

  constructor(public consuService: ConsultasService) {
    this.TotalHoras = 0;
    this.TotalExtras = 0;
  }

  ngOnInit() {
    // Consume el servicio
    this.consuService.periodos()
    .subscribe((data: any[]) => {
      this.Split = data;
      const row = this.Split[0];
      const testScript = document.createElement('script');
      testScript.setAttribute('id', 'testScript');
      testScript.setAttribute('src', 'assets/js/nomina.js');
      document.body.appendChild(testScript);
      this.getNomina(row[0].numero, row[0].year);
    });
  }

  descargarPDF( periodo: Periodos ) {
    this.consuService.obtenerPDF( periodo )
    .subscribe((url: string) => {
      const link = document.createElement('a');
      link.target = '_blank';
      link.href = url;
      link.setAttribute('visibility', 'hidden');
      link.click();
    });
  }
  descargarXML( periodo: Periodos ) {
    this.consuService.obtenerXML( periodo )
    .subscribe((data: any) => {
      const blob = new Blob([data], { type: 'application/xml' });
      const url = window.URL.createObjectURL(blob);
      saveAs(blob, `PER${ periodo.numero }.xml`);
      window.open(url);
    });
  }

  getNomina(periodo, year) {
    this.TotalHoras = 0;
    this.TotalExtras = 0;
    this.nomina.numero = periodo;
    this.nomina.year = year;

    this.consuService.nomina( this.nomina )
    .subscribe((nomi: Nomina) => {
      this.nomina = nomi;
      for (const pre of this.nomina.prenomina) {
        this.TotalHoras += pre.Horas;
        this.TotalExtras += pre.HoraExtras;
      }
    });
  }

  getPercepciones() {
    if (this.nomina.detNomina != null) {
      return this.nomina.detNomina.filter((item) => item.Tipo === 1);
    }
  }
  getDeduciones() {
    if (this.nomina.detNomina != null) {
      return this.nomina.detNomina.filter((item) => item.Tipo === 2);
    }
  }
  getVales() {
    if (this.nomina.detNomina != null) {
      const vales = this.nomina.detNomina.filter((item) => item.Numero === 13);
      return vales;
    }
  }
  getTotalVales() {
    if (this.nomina.detNomina != null) {
      let total = 0;
      for (const item of this.getVales()) {
        total += item.Percepcion;
      }
      return total;
    }
  }

}

