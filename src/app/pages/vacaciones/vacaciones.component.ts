import { Component, OnInit } from '@angular/core';
import { Vacaciones } from '../../models/model.index';
import { ConsultasService } from '../../services/service.index';


@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent implements OnInit {
  vacaciones: Vacaciones = new Vacaciones();

  constructor(public consService: ConsultasService) { }

  ngOnInit() {
    this.consService.vacaciones()
    .subscribe((data: Vacaciones) => {
      this.vacaciones = data;
    });
  }

}
