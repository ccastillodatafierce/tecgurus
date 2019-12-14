import { Component, 
  OnInit } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';

import * as models from '../../models';
import { Producto } from '../../models';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

	tarjeta: Tarjeta= {
		titulo: 'Titulo',
		cuerpo: 'Descripcion',
		precio: 10.123456789
	}

  descuento: number;


  constructor() {

  }

  ngOnInit() {

  }


  obtenerDescuento(event: number){
    this.descuento= event;

  }

 public abrirPagina(event: string){
    window.location.href= event;

  }

}
