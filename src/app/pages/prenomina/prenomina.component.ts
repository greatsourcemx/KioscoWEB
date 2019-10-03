import { Component, OnInit } from '@angular/core';
import { Prenomina } from '../../models/prenomina.model';
import { ConsultasService } from '../../services/consultas.service';


@Component({
  selector: 'app-prenomina',
  templateUrl: './prenomina.component.html',
  styleUrls: ['./prenomina.component.css']
})
export class PrenominaComponent implements OnInit {

  prenomina: Prenomina[] = [];
  TotalHoras: any;
  TotalExtras: any;
  Day: any;

  constructor(public consuService: ConsultasService) {
    this.TotalHoras = 0;
    this.TotalExtras = 0;
  }

  ngOnInit() {
    // Consume el servicio
    this.consuService.prenomina()
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
