import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/model.index';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Usua: Usuario = new Usuario();
  loaded = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.authService.cargarUsuario()
    .subscribe((data: Usuario) => {
      this.Usua = data;
      this.loaded = true;
    });
  }

}
