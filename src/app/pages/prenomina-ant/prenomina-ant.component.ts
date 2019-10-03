import { Component, OnInit } from '@angular/core';
import { Prenomina } from '../../models/model.index';
import { ConsultasService } from '../../services/service.index';

@Component({
  selector: 'app-prenomina-ant',
  templateUrl: './prenomina-ant.component.html',
  styleUrls: ['./prenomina-ant.component.css']
})
export class PrenominaAntComponent implements OnInit {
  prenomina: Prenomina[] = [];
  TotalHoras = 0;
  TotalExtras = 0;
  Day: any;

  constructor(public consService: ConsultasService) {
    this.TotalHoras = 0;
    this.TotalExtras = 0;
  }

  ngOnInit() {
    this.cargarPrenomina();
  }

  cargarPrenomina() {
    this.consService.prenominaANT()
    .subscribe((data: Prenomina[]) => {
      this.prenomina = data;
      for (const pre of this.prenomina) {
        this.TotalHoras += pre.Horas;
        this.TotalExtras += pre.HoraExtras;
      }
    });
  }

  diaSemana( fecha: Date ): string {
    switch ( fecha.getDay() ) {
      case 1:
        return 'Lunes';
      case 2:
        return 'Martes';
      case 3:
        return 'Miercoles';
      case 4:
        return 'Jueves';
      case 5:
        return 'Viernes';
      case 6:
        return 'Sábado';
      default:
        return 'Domingo';
    }
  }

}
