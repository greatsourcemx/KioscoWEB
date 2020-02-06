import { Component, OnInit } from '@angular/core';
import { Ahorro } from '../../models/model.index';
import { ConsultasService } from '../../services/service.index';

@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.component.html',
  styleUrls: ['./ahorro.component.css']
})
export class AhorroComponent implements OnInit {

  ahorro1: Ahorro[] = [];
  fecha: any;
  total: any;
  cargos: any;
  saldo: any;
  formula: any;

  constructor(public consuServices: ConsultasService) { 


  }

  ngOnInit() {
    // Consume el servicio
    this.consuServices.ahorro()
    .subscribe((data: Array<Ahorro[]>) => {
      
      this.total = data[0]["total"];
      this.cargos = data[0]["cargos"];
      this.saldo = data[0]["saldo"];
      this.formula = data[0]["formula"];
      this.fecha = this.fechas(data[0]["fecha"]);
    });
  }
fechas(fecha){

    if (fecha != undefined) {
      var fechasp = fecha.split("-"); 
      var year = fechasp[0];
      var month = fechasp[1]; 
      var day = fechasp[2].substr(0,2);

      if(month == '01'){
        month = 'Enero';
      }
      if(month == '02'){
        month = 'Febrero';
      }
      if(month == '03'){
        month = 'Marzo';
      }
      if(month == '04'){
        month = 'Abril';
      }
      if(month == '05'){
        month = 'Mayo';
      }
      if(month == '06'){
        month = 'Junio';
      }
      if(month == '07'){
        month = 'Julio';
      }
      if(month == '08'){
        month = 'Agosto';
      }
      if(month == '09'){
        month = 'Septiembre';
      }
      if(month == '10'){
        month = 'Octubre';
      }
      if(month == '11'){
        month = 'Noviembre';
      }
      if(month == '12'){
        month = 'Diciembre';
      }
    }
    return day + " " + month + " " + year;
}

}
