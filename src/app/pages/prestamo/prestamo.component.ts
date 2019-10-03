import { Component, OnInit } from '@angular/core';
import { Prestamos } from '../../models/prestamo.model';
import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  TotalDesc: number;
  TotalPres: number;
  TotalAbon: number;
  TotalSaldo: number;
  prestamos: Prestamos[] = [];

  constructor(public consService: ConsultasService) { }

  ngOnInit() {
    this.TotalDesc = 0;
    this.TotalPres = 0;
    this.TotalAbon = 0;
    this.TotalSaldo = 0;
    // Consume el servicio
    this.consService.prestamos()
    .subscribe((data: Prestamos[]) => {
      this.prestamos = data;
      for ( const pre of this.prestamos) {
        this.TotalPres += pre.monto;
        this.TotalAbon += pre.total;
        this.TotalSaldo += pre.saldo;
        const form: any = pre.descuento.trim();
        if (form.search('/') > -1) {
          const operador = form.substring(form.search('/') + 1);
          const monto = form.substring(0, form.search('/'));
          this.TotalDesc += (monto / operador);
        } else {
          this.TotalDesc += form;
        }
      }
    });
  }

}
