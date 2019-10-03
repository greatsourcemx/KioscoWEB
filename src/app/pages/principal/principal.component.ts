import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/service.index';
import { Principal } from '../../models/model.index';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  principal: Principal = new Principal();
  usua: Usuario = new Usuario();

  constructor(public consuService: ConsultasService,
              public authService: AuthService) {
                this.usua = this.authService.usuario;
  }

  ngOnInit() {
    this.consuService.principal()
    .subscribe(data => {
      this.principal = data;
    });
  }

}
