import { Component, OnInit } from '@angular/core';
import { ObtenerRolService } from '../obtener-rol.service';

@Component({
  selector: 'app-actualizar-rol',
  templateUrl: './actualizar-rol.page.html',
  styleUrls: ['./actualizar-rol.page.scss'],
})
export class ActualizarRolPage implements OnInit {
  public listaRol: any[];


  constructor(private obtenerRolServicio :ObtenerRolService) { }

  ngOnInit() {
    this.obtenerRoles();
  }
  obtenerRoles(){
    this.obtenerRolServicio.obtenerRol().subscribe(
      respuesta =>{
        this.listaRol= respuesta
        console.log('traer rol',
        this.listaRol
        )
      }
    )
}
}