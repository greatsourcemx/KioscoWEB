import { Component, OnInit } from '@angular/core';
import { Comedor } from '../../models/model.index';
import { ConsultasService } from '../../services/service.index';

@Component({
  selector: 'app-comedor',
  templateUrl: './comedor.component.html',
  styleUrls: ['./comedor.component.css']
})
export class ComedorComponent implements OnInit {
  Usua: any;
  Total: any;
  TotalANT: any;
  comeActual: Comedor[] = null;
  ComeAnte: Comedor[] = null;

  constructor(public consuServices: ConsultasService) { }

  ngOnInit() {
    // Consume el servicio
    this.consuServices.comedor()
    .subscribe((data: Array<Comedor[]>) => {
      this.comeActual = data[0];
      this.ComeAnte = data[1];
      this.totales();
    });
  }

  totales() {
    this.Total = this.TotalANT = 0;
    for (const item of this.comeActual) {
      this.Total += item.Consumos;
    }
    for (const item of this.ComeAnte) {
      this.TotalANT += item.Consumos;
    }
  }
}
